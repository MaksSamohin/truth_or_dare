export const localizedFontSize = (language: string, ru: number, en: number) => {
  return language === "ru" ? ru : en;
};
