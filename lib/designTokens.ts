export const designTokens = {
  maxReadingWidth: "760px",
  colors: {
    ink: "#2d2924",
    warmPaper: "#f7f1e6",
    warmPaper2: "#efe6d8",
    subtleBorder: "#d8ccb7",
  },
  shadows: {
    softShadow: "0 12px 30px rgba(52, 41, 25, 0.10)",
    hoverShadow: "0 16px 34px rgba(52, 41, 25, 0.16)",
  },
  overlays: {
    heroOverlayLight: "linear-gradient(180deg, rgba(247, 241, 230, 0.065), rgba(247, 241, 230, 0.09))",
  },
} as const;

export type DesignTokens = typeof designTokens;
