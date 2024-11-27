import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Link from 'next/link';

export default function Guides() {
  const { t } = useTranslation('common');

  const guideCategories = [
    {
      title: 'Getting Started',
      guides: [
        { title: 'Beginner\'s Guide', slug: 'beginners-guide' },
        { title: 'System Requirements', slug: 'system-requirements' },
        { title: 'Installation Guide', slug: 'installation-guide' }
      ]
    },
    {
      title: 'Classes & Combat',
      guides: [
        { title: 'Class Overview', slug: 'class-overview' },
        { title: 'Combat Mechanics', slug: 'combat-mechanics' },
        { title: 'PvP Basics', slug: 'pvp-basics' }
      ]
    },
    {
      title: 'Game Mechanics',
      guides: [
        { title: 'Crafting System', slug: 'crafting-system' },
        { title: 'Trading Guide', slug: 'trading-guide' },
        { title: 'Progression System', slug: 'progression-system' }
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Corepunk Guides - Comprehensive Tutorials & Strategies</title>
        <meta 
          name="description" 
          content="Complete collection of Corepunk guides, from beginner tutorials to advanced strategies. Learn about classes, combat, crafting, and more."
        />
        <meta name="keywords" content="Corepunk guides, Corepunk tutorials, Corepunk classes, Corepunk gameplay" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Corepunk Guides</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guideCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4">{category.title}</h2>
              <ul className="space-y-3">
                {category.guides.map((guide, guideIndex) => (
                  <li key={guideIndex}>
                    <Link 
                      href={`/guides/${guide.slug}`}
                      className="text-accent hover:text-accent/80 transition-colors"
                    >
                      {guide.title}
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