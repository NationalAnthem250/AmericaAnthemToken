// Translation registry to decouple translations from context for HMR stability
let currentTranslations = {} as any;

export const getTranslations = () => currentTranslations;

export const setTranslations = (translations: any) => {
  currentTranslations = translations;
};