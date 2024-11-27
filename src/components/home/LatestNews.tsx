import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export default function LatestNews() {
  const { t } = useTranslation('common');

  const news = [
    {
      id: 1,
      title: 'Corepunk Beta Test Announcement',
      date: '2023-12-15',
      image: 'https://corepunk.com/images/news/beta-announcement.jpg',
      excerpt: 'Join the upcoming Corepunk beta test phase and experience the game firsthand.',
      slug: 'corepunk-beta-test-announcement'
    },
    {
      id: 2,
      title: 'New Class Reveal: The Technomancer',
      date: '2023-12-10',
      image: 'https://corepunk.com/images/news/technomancer-reveal.jpg',
      excerpt: 'Discover the powerful abilities of the newly revealed Technomancer class.',
      slug: 'technomancer-class-reveal'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {news.map((item) => (
        <article key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-48">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <time className="text-sm text-gray-500">{item.date}</time>
            <h3 className="text-xl font-semibold mt-2">
              <Link href={`/news/${item.slug}`} className="hover:text-accent">
                {item.title}
              </Link>
            </h3>
            <p className="mt-2 text-gray-600">{item.excerpt}</p>
          </div>
        </article>
      ))}
    </div>
  );
}