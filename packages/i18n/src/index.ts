export const supportedLanguages = ["vi", "en", "zh", "ja"] as const;
export type Language = (typeof supportedLanguages)[number];
