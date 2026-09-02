import { Platform } from "react-native";

export const Colors = {
  light: {
    textPrimary: "#FFFFFF",
    textSecondary: "#000000",
    textHeader: "#EAECF8",
    background: "#ffffff",
    backgroundElement: "#F0F0F3",
    backgroundSelected: "#E0E1E6",
    buttonPrimary: "#7F90E9",
    buttonSecondary: "#FBBF24",
    statusColor: "#4b93df",
    statusText: "#000dff",
    completedStatusText: "#14ac00",
    completeBackground: "#c4ffcf",
    startStatusText: "#003CFF",
    startStatusBackground: "#7db5ff",
    lockedStatusBackground: "#cfcfcf",
    activeTabBarBackground: "#2247d8",
    borderColor: "#C8C8C8",
  },
  dark: {
    text: "#ffffff",
    background: "#000000",
    backgroundElement: "#212225",
    backgroundSelected: "#2E3135",
    textSecondary: "#B0B4BA",
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: "system-ui",
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: "ui-serif",
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: "ui-rounded",
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: "ui-monospace",
  },
  default: {
    sans: "inter",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: "var(--font-display)",
    serif: "var(--font-serif)",
    rounded: "var(--font-rounded)",
    mono: "var(--font-mono)",
  },
});

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
  seven: 96,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;
