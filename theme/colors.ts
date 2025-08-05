import { Platform } from "react-native";

const IOS_SYSTEM_COLORS = {
  white: "rgb(255, 255, 255)",
  black: "rgb(0, 0, 0)",
  light: {
    grey6: "rgb(251, 251, 251)",
    grey5: "rgb(241, 241, 240)",
    grey4: "rgb(231, 232, 229)",
    grey3: "rgb(216, 217, 213)",
    grey2: "rgb(186, 188, 181)",
    grey: "rgb(166, 169, 160)",
    background: "rgb(251, 252, 250)",
    foreground: "rgb(0, 0, 0)",
    root: "rgb(251, 252, 250)",
    card: "rgb(251, 252, 250)",
    destructive: "rgb(255, 56, 43)",
    primary: "rgb(232, 255, 168)",
  },
  dark: {
    grey6: "rgb(31, 32, 29)",
    grey5: "rgb(52, 53, 48)",
    grey4: "rgb(65, 66, 60)",
    grey3: "rgb(86, 88, 80)",
    grey2: "rgb(130, 133, 121)",
    grey: "rgb(167, 170, 161)",
    background: "rgb(0, 0, 0)",
    foreground: "rgb(255, 255, 254)",
    root: "rgb(0, 0, 0)",
    card: "rgb(0, 0, 0)",
    destructive: "rgb(254, 67, 54)",
    primary: "rgb(232, 255, 168)",
  },
} as const;

const ANDROID_COLORS = {
  white: "rgb(255, 255, 255)",
  black: "rgb(0, 0, 0)",
  light: {
    grey6: "rgb(248, 248, 248)",
    grey5: "rgb(237, 238, 239)",
    grey4: "rgb(226, 227, 229)",
    grey3: "rgb(210, 212, 214)",
    grey2: "rgb(178, 181, 185)",
    grey: "rgb(156, 161, 166)",
    background: "rgb(245, 247, 248)",
    foreground: "rgb(4, 5, 6)",
    root: "rgb(245, 247, 248)",
    card: "rgb(245, 247, 248)",
    destructive: "rgb(186, 26, 26)",
    primary: "rgb(0, 111, 231)",
  },
  dark: {
    grey6: "rgb(26, 27, 29)",
    grey5: "rgb(44, 46, 48)",
    grey4: "rgb(56, 59, 62)",
    grey3: "rgb(75, 79, 83)",
    grey2: "rgb(116, 122, 128)",
    grey: "rgb(156, 160, 165)",
    background: "rgb(0, 2, 5)",
    foreground: "rgb(246, 250, 255)",
    root: "rgb(0, 2, 5)",
    card: "rgb(0, 2, 5)",
    destructive: "rgb(147, 0, 10)",
    primary: "rgb(43, 145, 255)",
  },
} as const;

const WEB_COLORS = {
  white: "rgb(255, 255, 255)",
  black: "rgb(0, 0, 0)",
  light: {
    grey6: "rgb(247, 248, 248)",
    grey5: "rgb(237, 238, 239)",
    grey4: "rgb(226, 227, 229)",
    grey3: "rgb(210, 212, 214)",
    grey2: "rgb(178, 181, 185)",
    grey: "rgb(156, 161, 166)",
    background: "rgb(245, 246, 248)",
    foreground: "rgb(4, 5, 6)",
    root: "rgb(245, 246, 248)",
    card: "rgb(245, 246, 248)",
    destructive: "rgb(186, 26, 26)",
    primary: "rgb(0, 110, 227)",
  },
  dark: {
    grey6: "rgb(26, 27, 29)",
    grey5: "rgb(44, 46, 48)",
    grey4: "rgb(56, 59, 62)",
    grey3: "rgb(75, 79, 83)",
    grey2: "rgb(116, 122, 128)",
    grey: "rgb(156, 160, 165)",
    background: "rgb(0, 2, 5)",
    foreground: "rgb(246, 250, 255)",
    root: "rgb(0, 2, 5)",
    card: "rgb(0, 2, 5)",
    destructive: "rgb(147, 0, 10)",
    primary: "rgb(40, 144, 255)",
  },
} as const;

const COLORS =
  Platform.OS === "ios"
    ? IOS_SYSTEM_COLORS
    : Platform.OS === "android"
      ? ANDROID_COLORS
      : WEB_COLORS;

export { COLORS };
