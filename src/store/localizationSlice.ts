import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { translations } from "../translations/translations";

type Language = "ru" | "en";

const localizationSlice = createSlice({
  name: "localization",
  initialState: {
    language: "ru" as Language,
  },
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.language = action.payload;
    },
    toggleLanguage: (state) => {
      state.language = state.language === "ru" ? "en" : "ru";
    },
  },
});

export const { setLanguage, toggleLanguage } = localizationSlice.actions;
export const selectLanguage = (state: any) => state.localization.language;
export const t = (key: keyof (typeof translations)["ru"], lang: Language) =>
  translations[lang][key];

export default localizationSlice.reducer;
