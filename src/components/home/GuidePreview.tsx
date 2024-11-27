import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export default function GuidePreview() {
  const { t } = useTranslation('common');

  const guides = [
    {
      id: 1,
      title: 'Complete Beginner\'s Guide to Corepunk',
      category: 'Basics',
      image: 'https://corepunk.com/images/guides/beginners-guide.jpg',
      excerpt: 'Everything you need to know to start your journey in Corepunk.',
      slug: 'beginners-guide'
    },
    {
      id: 2,
      title: 'Class Selection Guide',
      category: 'Classes',
      image: 'https://corepunk.com/images/guides/class-guide.jpg',
      excerpt: 'Detailed overview of all available classes and their playstyles.',
      slug: 'class-selection-guide'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {guides.map((guide) => (
        <article key={guide.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-48">
            <Image
              src={guide.image}
              alt={guide.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-accent bg-accent/10 rounded-full">
              {guide.category}
            </span>
            <h3 className="text-xl font-semibold mt-2">
              <Link href={`/guides/${guide.slug}`} className="hover:text-accent">
                {guide.title}
              </Link>
            </h3>
            <p className="mt-2 text-gray-600">{guide.excerpt}</p>
          </div>
        </article>
      ))}
    </div>
  );
}