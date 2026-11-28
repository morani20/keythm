"use client";

import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import type { KeyboardThemeName } from "@/components/ui/keyboard";
import { syncKeythmFavicon } from "@/lib/favicon-client";
import { FONT_OPTIONS, type TypingFont } from "@/lib/font-options";
import { THEME_OPTIONS } from "@/lib/theme-options";
import { safeStorage } from "@/lib/safe-storage";

export {
  FONT_OPTIONS,
  type FontOption,
  type TypingFont,
} from "@/lib/font-options";
export { THEME_OPTIONS } from "@/lib/theme-options";

interface SettingsContextType {
  accent: KeyboardThemeName;
  faahMode: boolean;
  font: TypingFont;
  fontCssFamily: string;
  ghostMode: boolean;
  liveStats: boolean;
  setAccent: (c: KeyboardThemeName) => void;
  setFaahMode: (v: boolean) => void;
  setFont: (f: TypingFont) => void;
  setGhostMode: (v: boolean) => void;
  setLiveStats: (v: boolean) => void;
  setShowKeyboard: (v: boolean) => void;
  setSoundEnabled: (v: boolean) => void;
  setSoundVolume: (v: number) => void;
  showKeyboard: boolean;
  soundEnabled: boolean;
  soundVolume: number;
}

const SettingsContext = createContext<SettingsContextType | null>(null);

function loadGoogleFont(family: string) {
  const id = `gf-${family}`;
  if (document.getElementById(id)) {
    return;
  }
  const link = document.createElement("link");
  link.id = id;
  link.rel = "stylesheet";
  link.href = `https://fonts.googleapis.com/css2?family=${family}&display=swap`;
  document.head.appendChild(link);
}

function applyAccentToDom(accent: KeyboardThemeName) {
  document.documentElement.setAttribute("data-accent", accent);
  queueMicrotask(() => syncKeythmFavicon());
}

function applyFontToDom(fontId: TypingFont) {
  const option = FONT_OPTIONS.find((f) => f.id === fontId);
  if (!option) {
    return;
  }
  if (option.googleFamily) {
    loadGoogleFont(option.googleFamily);
  }
  // Fallbacks keep text readable while the web font is still downloading
  // (or if Google Fonts is blocked).
  const fallback =
    option.tag === "sans" ? "var(--font-sans), sans-serif" : "var(--font-mono), monospace";
  document.documentElement.style.setProperty(
    "--typing-font",
    option.googleFamily ? `${option.cssFamily}, ${fallback}` : option.cssFamily
  );
}

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [accent, setAccentState] = useState<KeyboardThemeName>("classic");
  const [font, setFontState] = useState<TypingFont>("geist-mono");
  const [showKeyboard, setShowKeyboardState] = useState(true);
  const [soundEnabled, setSoundEnabledState] = useState(true);
  const [soundVolume, setSoundVolumeState] = useState(0.8);
  const [liveStats, setLiveStatsState] = useState(true);
  const [faahMode, setFaahModeState] = useState(false);
  const [ghostMode, setGhostModeState] = useState(false);
  // One-time hydration from localStorage on mount
  useEffect(() => {
    const validThemes = new Set<string>(THEME_OPTIONS.map((t) => t.id));
    const rawAccent = safeStorage.getItem("tc-accent");
    const savedFont = safeStorage.getItem("tc-font") as TypingFont | null;
    const savedShowKeyboard = safeStorage.getItem("tc-show-keyboard");
    const savedSoundEnabled = safeStorage.getItem("tc-sound-enabled");
    const savedSoundVolume = safeStorage.getItem("tc-sound-volume");
    const savedRealtimeWpm = safeStorage.getItem("tc-realtime-wpm");
    const savedFaahMode = safeStorage.getItem("tc-faah-mode");
    const savedGhostMode = safeStorage.getItem("tc-ghost-mode");

    const initialAccent =
      rawAccent && validThemes.has(rawAccent)
        ? (rawAccent as KeyboardThemeName)
        : "classic";
    setAccentState(initialAccent);
    applyAccentToDom(initialAccent);

    if (savedFont && FONT_OPTIONS.some((f) => f.id === savedFont)) {
      setFontState(savedFont);
      applyFontToDom(savedFont);
    }
    if (savedShowKeyboard !== null) {
      setShowKeyboardState(savedShowKeyboard !== "false");
    }
    if (savedSoundEnabled !== null) {
      setSoundEnabledState(savedSoundEnabled !== "false");
    }
    if (savedSoundVolume !== null) {
      const v = Number(savedSoundVolume);
      if (Number.isFinite(v) && v >= 0 && v <= 1) {
        setSoundVolumeState(v);
      }
    }
    if (savedRealtimeWpm !== null) {
      setLiveStatsState(savedRealtimeWpm === "true");
    }
    if (savedFaahMode !== null) {
      setFaahModeState(savedFaahMode === "true");
    }
    if (savedGhostMode !== null) {
      setGhostModeState(savedGhostMode === "true");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Rule 3: setAccent / setFont are event handlers that apply DOM changes
  // directly instead of relying on a reactive useEffect to "sync" them.
  const setAccent = (c: KeyboardThemeName) => {
    setAccentState(c);
    applyAccentToDom(c);
    safeStorage.setItem("tc-accent", c);
  };

  const setFont = (f: TypingFont) => {
    setFontState(f);
    applyFontToDom(f);
    safeStorage.setItem("tc-font", f);
  };

  const setShowKeyboard = (v: boolean) => {
    setShowKeyboardState(v);
    safeStorage.setItem("tc-show-keyboard", String(v));
  };

  const setSoundEnabled = (v: boolean) => {
    setSoundEnabledState(v);
    safeStorage.setItem("tc-sound-enabled", String(v));
  };

  const setSoundVolume = (v: number) => {
    setSoundVolumeState(v);
    safeStorage.setItem("tc-sound-volume", String(v));
  };

  const setLiveStats = (v: boolean) => {
    setLiveStatsState(v);
    safeStorage.setItem("tc-realtime-wpm", String(v));
  };

  const setFaahMode = (v: boolean) => {
    setFaahModeState(v);
    safeStorage.setItem("tc-faah-mode", String(v));
  };

  const setGhostMode = (v: boolean) => {
    setGhostModeState(v);
    safeStorage.setItem("tc-ghost-mode", String(v));
  };

  const fontCssFamily =
    FONT_OPTIONS.find((f) => f.id === font)?.cssFamily ?? "var(--font-mono)";

  return (
    <SettingsContext.Provider
      value={{
        accent,
        setAccent,
        font,
        setFont,
        fontCssFamily,
        showKeyboard,
        setShowKeyboard,
        soundEnabled,
        setSoundEnabled,
        soundVolume,
        setSoundVolume,
        liveStats,
        setLiveStats,
        faahMode,
        setFaahMode,
        ghostMode,
        setGhostMode,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const ctx = useContext(SettingsContext);
  if (!ctx) {
    throw new Error("useSettings must be used within SettingsProvider");
  }
  return ctx;
}
