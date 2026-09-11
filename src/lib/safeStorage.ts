/**
 * Safe wrapper around localStorage / sessionStorage.
 *
 * In sandboxed iframes (e.g. AI Studio previews), certain private-browsing
 * modes, or environments with third-party storage blocked, calling
 * `localStorage.getItem` / `setItem` can throw a SecurityError / DOMException
 * instead of failing silently. If that throw happens outside a try/catch
 * (e.g. directly inside a component's render or useEffect), React has no
 * error boundary here and the whole page fails to render — this is what
 * caused the "page won't load" issue on the Admin panel.
 *
 * This module centralizes all storage access behind try/catch, falling back
 * to an in-memory Map when real storage is unavailable, so the app always
 * renders even if data won't persist across reloads in that environment.
 */

const memoryFallback = new Map<string, string>();
let storageWarningShown = false;

function warnOnce() {
  if (!storageWarningShown) {
    storageWarningShown = true;
    console.warn(
      "[safeStorage] Browser storage is unavailable in this environment. " +
        "Falling back to in-memory storage (data will not persist after reload)."
    );
  }
}

function getStore(kind: "local" | "session"): Storage | null {
  try {
    const store = kind === "local" ? window.localStorage : window.sessionStorage;
    // Some browsers expose the object but throw on actual use, so verify.
    const testKey = "__rh_storage_test__";
    store.setItem(testKey, "1");
    store.removeItem(testKey);
    return store;
  } catch {
    return null;
  }
}

export const safeStorage = {
  getItem(key: string, kind: "local" | "session" = "local"): string | null {
    try {
      const store = getStore(kind);
      if (store) return store.getItem(key);
      warnOnce();
      return memoryFallback.has(key) ? memoryFallback.get(key)! : null;
    } catch {
      warnOnce();
      return memoryFallback.has(key) ? memoryFallback.get(key)! : null;
    }
  },
  setItem(key: string, value: string, kind: "local" | "session" = "local"): void {
    try {
      const store = getStore(kind);
      if (store) {
        store.setItem(key, value);
        return;
      }
      warnOnce();
      memoryFallback.set(key, value);
    } catch {
      warnOnce();
      memoryFallback.set(key, value);
    }
  },
  removeItem(key: string, kind: "local" | "session" = "local"): void {
    try {
      const store = getStore(kind);
      if (store) {
        store.removeItem(key);
        return;
      }
      memoryFallback.delete(key);
    } catch {
      memoryFallback.delete(key);
    }
  },
};
