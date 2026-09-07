export type DetectedPlatform = "windows" | "linux" | "unknown";

export function detectPlatform(): DetectedPlatform {
  if (typeof navigator === "undefined") return "unknown";

  const uaData = (navigator as any).userAgentData;
  const platformStr: string = uaData?.platform || navigator.platform || navigator.userAgent || "";
  const p = platformStr.toLowerCase();

  if (p.includes("win")) return "windows";
  if (p.includes("linux") && !p.includes("android")) return "linux";

  return "unknown";
}
