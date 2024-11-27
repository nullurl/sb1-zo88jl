import React from 'react';
import Link from 'next/link';
import { useTranslations } from '@/utils/i18n/useTranslations';
import { FaBook, FaGamepad, FaUsers, FaTools, FaNewspaper, FaDiscord } from 'react-icons/fa';

export default function ContentGrid() {
  const { t } = useTranslations();

  const sections = [
    {
      title: t('common.nav.guides'),
      icon: FaBook,
      description: 'Master the game with our comprehensive guides and tutorials',
      link: '/guides'
    },
    {
      title: t('common.nav.wiki'),
      icon: FaGamepad,
      description: 'Explore the extensive database of game lore, items, and mechanics',
      link: '/wiki'
    },
    {
      title: 'Media',
      icon: FaNewspaper,
      description: 'Watch the latest trailers, cinematics, and gameplay footage',
      link: '/media'
    },
    {
      title: t('common.nav.resources'),
      icon: FaTools,
      description: 'Access tools, maps, and reference materials',
      link: '/resources'
    },
    {
      title: t('common.nav.community'),
      icon: FaUsers,
      description: 'Join forums and connect with other players',
      link: '/community'
    },
    {
      title: 'Discord',
      icon: FaDiscord,
      description: 'Join our Discord community for live discussions and updates',
      link: 'https://discord.gg/corepunk',
      external: true
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-secondary/80 rounded-lg p-6 hover:bg-secondary transition-colors"
          >
            {section.external ? (
              <a
                href={section.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col h-full"
              >
                <ContentCard section={section} />
              </a>
            ) : (
              <Link href={section.link} className="flex flex-col h-full">
                <ContentCard section={section} />
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function ContentCard({ section }: { section: any }) {
  return (
    <>
      <div className="flex items-center mb-4">
        <section.icon className="text-accent text-2xl mr-3" />
        <h3 className="text-xl font-semibold text-white">{section.title}</h3>
      </div>
      <p className="text-gray-300 flex-grow">{section.description}</p>
    </>
  );
}