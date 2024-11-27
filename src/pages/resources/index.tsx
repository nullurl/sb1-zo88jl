import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Link from 'next/link';

export default function Resources() {
  const { t } = useTranslation('common');

  const resources = [
    {
      title: 'Game Client',
      items: [
        { title: 'Download Corepunk', link: 'https://corepunk.com/download' },
        { title: 'System Requirements', link: '/resources/system-requirements' },
        { title: 'Installation Guide', link: '/resources/installation-guide' }
      ]
    },
    {
      title: 'Media',
      items: [
        { title: 'Screenshots', link: '/resources/screenshots' },
        { title: 'Videos & Trailers', link: '/resources/videos' },
        { title: 'Artwork', link: '/resources/artwork' }
      ]
    },
    {
      title: 'Tools & Add-ons',
      items: [
        { title: 'UI Customization', link: '/resources/ui-customization' },
        { title: 'Game Launcher', link: '/resources/launcher' },
        { title: 'Community Tools', link: '/resources/community-tools' }
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Corepunk Resources - Downloads, Media & Tools</title>
        <meta 
          name="description" 
          content="Access essential Corepunk resources including game client downloads, media gallery, system requirements, and community tools."
        />
        <meta name="keywords" content="Corepunk download, Corepunk system requirements, Corepunk media, Corepunk tools" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Corepunk Resources</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((section, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link 
                      href={item.link}
                      className="text-accent hover:text-accent/80 transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
};