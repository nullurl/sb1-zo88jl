import Link from 'next/link';
import { useTranslations } from '@/utils/i18n/useTranslations';

interface NavItem {
  name: string;
  href: string;
}

export default function MainNav() {
  const { t } = useTranslations();

  const navigation: NavItem[] = [
    { name: t('common.nav.home'), href: '/' },
    { name: t('common.nav.guides'), href: '/guides' },
    { name: t('common.nav.wiki'), href: '/wiki' },
    { name: t('common.nav.resources'), href: '/resources' },
    { name: t('common.nav.community'), href: '/community' },
  ];

  return (
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
  );
}