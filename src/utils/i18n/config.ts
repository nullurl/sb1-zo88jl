export const i18nConfig = {
  defaultLocale: 'en',
  locales: ['en', 'zh', 'fr', 'es'],
  namespaces: ['common'],
  defaultNamespace: 'common',
  localePath: typeof window === 'undefined' ? 'public/locales' : 'locales'
};