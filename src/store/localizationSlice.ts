import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { translations } from "../translations/translations";

type Language = "ru" | "en";

const localizationSlice = createSlice({
  name: "localization",
  initialState: {
    language: "ru" as Language,
  },
  reducers: {
    toggleLanguage: (state) => {
      state.language = state.language === "ru" ? "en" : "ru";
    },
  },
});

export const { toggleLanguage } = localizationSlice.actions;
export const selectLanguage = (state: any) => state.localization.language;
export const t = (key: keyof (typeof translations)["ru"], lang: Language) =>
  translations[lang][key];

export default localizationSlice.reducer;
