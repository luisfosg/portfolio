import { ui, defaultLang, languages } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export const getStaticPath = async () => {
  const langs = Object.keys(languages)
  const paths = langs.map(lang  => ({ params: { lang }}))

  return paths;
}
