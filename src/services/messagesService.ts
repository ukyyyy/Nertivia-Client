import wrapper from "./wrapper";
import Message from "@/interfaces/Message";
import User from "@/interfaces/User";
import { socket } from "@/socket";

interface ResponseFetch {
  channelId: string;
  messages: Message[];
}
interface ResponsePost {
  tempID: string;
  messageCreated: Message;
}
export function fetchMessages(channelId: string): Promise<ResponseFetch> {
  return wrapper().get(`messages/channels/${channelId}`).json();
}
export function fetchMessagesContinue(
  channelId: string,
  continueMessageID: string
): Promise<ResponseFetch> {
  return wrapper()
    .get(`messages/channels/${channelId}?continue=${continueMessageID}`)
    .json();
}
export function deleteMessages(
  channelId: string,
  messageIds: string[]
): Promise<ResponseFetch> {
  return wrapper()
    .delete(`messages/${channelId}/bulk`, { json: { ids: messageIds } })
    .json();
}
export function fetchMessagesBefore(
  channelId: string,
  beforeMessageID: string
): Promise<ResponseFetch> {
  return wrapper()
    .get(`messages/channels/${channelId}?before=${beforeMessageID}`)
    .json();
}
export function fetchMessagesAround(
  channelId: string,
  messageID: string
): Promise<ResponseFetch> {
  return wrapper()
    .get(`messages/channels/${channelId}?around=${messageID}`)
    .json();
}

export interface PostReaction {
  emojiID?: string;
  gif?: boolean;
  unicode?: string;
}

export function addReaction(
  channelId: string,
  messageID: string,
  reaction: PostReaction
): Promise<any> {
  return wrapper()
    .post(`messages/${messageID}/channels/${channelId}/reactions`, {
      json: reaction,
    })
    .json();
}
export function getReactedUsers(
  channelId: string,
  messageID: string,
  limit: number,
  emojiID?: string,
  unicode?: string
): Promise<User[]> {
  const searchParams: any = { limit };
  if (emojiID) {
    searchParams.emojiID = emojiID;
  } else {
    searchParams.unicode = unicode;
  }
  return wrapper()
    .get(`messages/${messageID}/channels/${channelId}/reactions/users`, {
      searchParams,
    })
    .json();
}
export function removeReaction(
  channelId: string,
  messageID: string,
  reaction: PostReaction
): Promise<any> {
  return wrapper()
    .delete(`messages/${messageID}/channels/${channelId}/reactions`, {
      json: reaction,
    })
    .json();
}

export function deleteMessage(
  channelId: string,
  messageID: string
): Promise<any> {
  return wrapper().delete(`messages/${messageID}/channels/${channelId}`).json();
}
export function postMessage(
  message: string,
  tempID: string,
  channelId: string
): Promise<ResponsePost> {
  return wrapper()
    .post(`messages/channels/${channelId}`, {
      json: { message, tempID, socketID: socket.id },
    })
    .json();
}

export function editMessage(
  messageID: string,
  channelId: string,
  data: any
): Promise<ResponsePost> {
  return wrapper()
    .patch(`messages/${messageID}/channels/${channelId}`, {
      json: data,
    })
    .json();
}
export function buttonClick(
  channelId: string,
  messageID: string,
  buttonID: string
): Promise<any> {
  return wrapper()
    .post(`channels/${channelId}/messages/${messageID}/button/${buttonID}`)
    .json();
}

export function postTypingStatus(channelId: string): Promise<ResponsePost> {
  return wrapper().post(`messages/${channelId}/typing`).json();
}

/**
 * Sendet eine Nachricht mit Anhang als multipart/form‑data.
 * Das `cdn`‑Argument wurde entfernt, dadurch wird stets der lokale
 * Speicher genutzt.
 */
export function postFormDataMessage(
  message: string,
  channelId: string,
  file: File,
  isImage: boolean,
  compress: boolean,
  callback: (error: any, progress: number | null, done: boolean | null) => void
) {
  const formData = new FormData();
  if (message) formData.append("message", message);
  // Kein upload_cdn – Uploads landen immer auf dem lokalen Server.
  if (isImage && compress) formData.append("compress", "1");
  formData.append("file", file);

  const request = new XMLHttpRequest();
  request.open("POST", process.env.VUE_APP_FETCH_PREFIX + `/messages/channels/${channelId}`);
  request.setRequestHeader("authorization", localStorage.getItem("hauthid") || "");

  request.onreadystatechange = function () {
    if (request.readyState === 4) {
      if (request.status === 200) {
        callback(null, null, true);
      } else {
        callback(JSON.parse(request.response), null, null);
      }
    }
  };
  request.upload.onprogress = (e) => {
    const percent = Math.round((e.loaded * 100) / e.total);
    callback(null, percent, null);
    return percent;
  };

  request.send(formData);
}

  // return wrapper()
  //   .post(`messages/chanfnels/${channelId}`, {
  //     body: formData,

  //   })
  //   .json();
}
