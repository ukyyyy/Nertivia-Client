const RAW_CDN = process.env.VUE_APP_NERTIVIA_CDN || "";

// entfernt trailing slashes
const CDN_BASE = RAW_CDN.replace(/\/+$/, "");

export function cdnUrl(...parts: string[]) {
  const cleanParts = parts.map(p =>
    String(p).replace(/^\/+|\/+$/g, "")
  );
  return `${CDN_BASE}/${cleanParts.join("/")}`;
}
