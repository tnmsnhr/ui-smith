import type { SemanticColorRole } from "../types/literals";

export type SemanticColors = Record<SemanticColorRole, string>;

export interface SemanticTokens {
  light: SemanticColors;
  dark: SemanticColors;
}

function lightPalette(): SemanticColors {
  return {
    "background.body": "#ffffff",
    "background.surface": "#f8fafc",
    "background.subtle": "#f1f5f9",
    "background.disabled": "#e2e8f0",
    "text.primary": "#0f172a",
    "text.secondary": "#334155",
    "text.muted": "#64748b",
    "text.disabled": "#94a3b8",
    "border.default": "#e2e8f0",
    "border.muted": "#cbd5e1",
    "intent.primary": "#2563eb",
    "intent.secondary": "#64748b",
    "intent.danger": "#dc2626",
    "intent.success": "#16a34a",
    "intent.warning": "#ca8a04",
    "intent.info": "#0284c7",
    "intent.muted": "#94a3b8",
  };
}

function darkPalette(): SemanticColors {
  return {
    "background.body": "#0f172a",
    "background.surface": "#1e293b",
    "background.subtle": "#334155",
    "background.disabled": "#334155",
    "text.primary": "#f8fafc",
    "text.secondary": "#cbd5e1",
    "text.muted": "#94a3b8",
    "text.disabled": "#64748b",
    "border.default": "#334155",
    "border.muted": "#475569",
    "intent.primary": "#60a5fa",
    "intent.secondary": "#94a3b8",
    "intent.danger": "#f87171",
    "intent.success": "#4ade80",
    "intent.warning": "#facc15",
    "intent.info": "#38bdf8",
    "intent.muted": "#64748b",
  };
}

/** Default semantic maps — replace roles in config as needed */
export const defaultSemanticTokens: SemanticTokens = {
  light: lightPalette(),
  dark: darkPalette(),
};
