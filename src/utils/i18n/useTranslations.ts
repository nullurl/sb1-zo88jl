import { useRouter } from 'next/router';
import { translations } from './translations';

export function useTranslations() {
  const router = useRouter();
  const { locale = 'en' } = router;
  
  const t = (key: string, defaultValue?: string) => {
    const keys = key.split('.');
    let value = translations[locale as keyof typeof translations];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k as keyof typeof value];
      } else {
        return defaultValue || key;
      }
    }
    
    return (value as string) || defaultValue || key;
  };

  return { t, locale };
}