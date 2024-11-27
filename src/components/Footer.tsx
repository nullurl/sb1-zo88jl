import Link from 'next/link';
import { useTranslations } from '@/utils/i18n/useTranslations';

export default function Footer() {
  const { t } = useTranslations();

  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">{t('common.footer.about')}</h3>
            <p className="text-gray-300">
              {t('common.footer.description')}
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">{t('common.footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/guides" className="hover:text-accent transition-colors">
                  {t('common.nav.guides')}
                </Link>
              </li>
              <li>
                <Link href="/wiki" className="hover:text-accent transition-colors">
                  {t('common.nav.wiki')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">{t('common.nav.community')}</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://discord.gg/corepunk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="https://reddit.com/r/corepunk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  Reddit
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">{t('common.footer.legal')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="hover:text-accent transition-colors">
                  {t('common.footer.privacy')}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-accent transition-colors">
                  {t('common.footer.terms')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Corepunk Wiki. {t('common.footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}