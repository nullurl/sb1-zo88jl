import { useRouter } from 'next/router';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export default function Header() {
  const router = useRouter();
  const { t } = useTranslation('common');

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.guides'), href: '/guides' },
    { name: t('nav.wiki'), href: '/wiki' },
    { name: t('nav.resources'), href: '/resources' },
    { name: t('nav.community'), href: '/community' },
  ];

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'zh', name: '中文' },
    { code: 'fr', name: 'Français' },
    { code: 'es', name: 'Español' },
  ];

  const handleLanguageChange = (locale: string) => {
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <header className="bg-primary text-white">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Corepunk Wiki
          </Link>

          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-accent transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

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
        </div>
      </nav>
    </header>
  );
}