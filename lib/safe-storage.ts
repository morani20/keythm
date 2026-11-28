// localStorage can throw (Safari private mode, blocked cookies, quota
// exceeded, sandboxed iframes). A throw inside an event handler or a mount
// effect would break typing/settings entirely, so every access goes through
// this wrapper and silently degrades to "not stored".
export const safeStorage = {
  getItem(key: string): string | null {
    try {
      return typeof window === "undefined"
        ? null
        : window.localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  setItem(key: string, value: string): void {
    try {
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, value);
      }
    } catch {
      /* storage unavailable — setting just won't persist */
    }
  },
  removeItem(key: string): void {
    try {
      if (typeof window !== "undefined") {
        window.localStorage.removeItem(key);
      }
    } catch {
      /* storage unavailable */
    }
  },
};
