import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Link from 'next/link';

export default function Wiki() {
  const { t } = useTranslation('common');

  const wikiSections = [
    {
      title: 'Game World',
      items: [
        { title: 'World Map', slug: 'world-map' },
        { title: 'Factions', slug: 'factions' },
        { title: 'Lore', slug: 'lore' }
      ]
    },
    {
      title: 'Characters',
      items: [
        { title: 'Classes', slug: 'classes' },
        { title: 'Skills & Abilities', slug: 'skills' },
        { title: 'Character Development', slug: 'character-development' }
      ]
    },
    {
      title: 'Game Systems',
      items: [
        { title: 'Combat System', slug: 'combat-system' },
        { title: 'Economy', slug: 'economy' },
        { title: 'Crafting', slug: 'crafting' }
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Corepunk Wiki - Complete Game Database & Information</title>
        <meta 
          name="description" 
          content="Comprehensive Corepunk wiki covering game mechanics, classes, maps, and more. Your ultimate source for Corepunk information."
        />
        <meta name="keywords" content="Corepunk wiki, Corepunk database, Corepunk mechanics, Corepunk maps" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Corepunk Wiki</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {wikiSections.map((section, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link 
                      href={`/wiki/${item.slug}`}
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