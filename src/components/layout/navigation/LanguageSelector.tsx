import { useRouter } from 'next/router';

interface Language {
  code: string;
  name: string;
}

export default function LanguageSelector() {
  const router = useRouter();

  const languages: Language[] = [
    { code: 'en', name: 'English' },
    { code: 'zh', name: '中文' },
    { code: 'fr', name: 'Français' },
    { code: 'es', name: 'Español' },
  ];

  const handleLanguageChange = (locale: string) => {
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <select
      onChange={(e) => handleLanguageChange(e.target.value)}
      value={router.locale}
      className="bg-secondary text-white px-3 py-1 rounded"
    >
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.name}
        </option>
      ))}
    </select>
  );
}