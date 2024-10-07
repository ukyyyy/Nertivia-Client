import { ServerRolesModule } from "@/store/modules/serverRoles"; // Korrigierter Import
import Channel from "@/interfaces/Channel";
import ServerRole from "@/interfaces/ServerRole"; // Sicherstellen, dass der Typ 'ServerRole' definiert ist
import { ChannelsModule } from "@/store/modules/channels";
import { UsersModule } from "@/store/modules/users";
import emojiParser from "./emojiParser";

function replaceMentions(message: string) {
  const regex = /@([^@]+?(?=:)):([\w]*)/g;

  return message.replace(regex, (word) => {
    const [username, tag] = word.split(":");
    if (!username || !tag) return word;
    const member = Object.values(UsersModule.users).find(
      (m) => "@" + m.username === username && m.tag === tag
    );
    if (!member) return word;
    return `<@${member.id}>`;
  });
}

function replaceChannelMentions(message: string, channels: Channel[]) {
  const getChannel = (name: string) => channels.find((c) => c.name === name);

  const result: string[] = [];
  const reg = /#([^#]+?)#/g;
  let name;

  let lastIndex = reg.lastIndex;
  let i = 0;

  while ((name = reg.exec(message)) !== null) {
    const channel = name[1] && getChannel(name[1]);
    if (channel) {
      result.push(message.slice(lastIndex, name.index));
      result.push(`<#${channel.channelId}>`);
      lastIndex = name.index + name[0].length;
    } else {
      reg.lastIndex = lastIndex + i;
    }
    i += 1;
  }
  result.push(message.slice(lastIndex));
  return result.join("");
}

// Fügt Rollensyntax für Discord-ähnliche Plattformen hinzu
function replaceRoleMentions(message: string) {
  const regex = /@&([^@&]+?(?=:)):([\w]*)/g;

  return message.replace(regex, (word) => {
    const roleName = word.split(":")[1];
    if (!roleName) return word;
    const role = Object.values(ServerRolesModule.serverRoles).find((r: ServerRole) => r.name === roleName);
    if (!role) return word;
    return `<@&${role.id}>`; // Rollen-Ping Syntax für Discord-ähnliche Plattformen
  });
}

// Verwende die Funktionen vor dem Senden einer Nachricht
export function formatMessage(message: string, channels?: Channel[]) {
  let formatted = message;
  formatted = emojiParser.replaceShortcode(formatted);
  formatted = replaceMentions(formatted);
  formatted = replaceRoleMentions(formatted); // Füge die Rollenerwähnung hinzu
  if (channels?.length) {
    formatted = replaceChannelMentions(formatted, channels);
  }
  return formatted;
}

// Revertieren der Erwähnungen
function revertMentions(message: string) {
  return message.replace(/<@([\d]+)>/g, (res) => {
    const id = res.slice(2, res.length - 1);
    const member = UsersModule.users[id];
    if (!member) return res;
    return `@${member.username}:${member.tag}`;
  });
}

// Revertieren der Kanalnamen
function revertChannel(message: string) {
  return message.replace(/<#([\d]+)>/g, (res) => {
    const id = res.slice(2, res.length - 1);
    const channel = ChannelsModule.channels[id];
    if (!channel?.name) return res;
    return `#${channel.name}#`;
  });
}

// Revertieren der Rollennamen
function revertRole(message: string) {
  return message.replace(/<@&([\d]+)>/g, (res) => {
    const id = res.slice(3, res.length - 1);
    const role = Object.values(ServerRolesModule.serverRoles).find((r: ServerRole) => r.id === id);
    if (!role) return res;
    return `@&${role.name}:${role.tag}`; // Angenommen, dass es ein 'tag' Attribut gibt
  });
}

// Verwende die Funktionen, wenn eine Nachricht bearbeitet wird
export function revertFormat(message: string) {
  let formatted = message;
  formatted = emojiParser.emojiToShortcode(formatted);
  formatted = revertMentions(formatted);
  formatted = revertChannel(formatted);
  formatted = revertRole(formatted); // Füge die Rollenerwähnung hinzu
  return formatted;
}
