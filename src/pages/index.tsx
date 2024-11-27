import Head from 'next/head';
import VideoSection from '@/components/home/VideoSection';
import DownloadSection from '@/components/home/DownloadSection';
import ImageGallery from '@/components/home/ImageGallery';
import ContentGrid from '@/components/home/ContentGrid';
import { generateVideoGameSchema } from '@/utils/seo/schema';
import PageMeta from '@/components/layout/meta/PageMeta';

export default function Home() {
  const schema = generateVideoGameSchema({
    name: 'Corepunk',
    description: 'An innovative MMORPG that blends cyberpunk and fantasy elements',
    genre: ['MMORPG', 'RPG', 'Fantasy', 'Cyberpunk'],
    gamePlatform: ['PC']
  });

  return (
    <>
      <PageMeta
        title="Corepunk Wiki - Your Ultimate Guide to Corepunk MMORPG"
        description="Experience Corepunk, the innovative MMORPG that blends cyberpunk and fantasy. Download now and join the adventure!"
        keywords={['Corepunk', 'MMORPG', 'cyberpunk game', 'fantasy MMORPG', 'online RPG']}
        ogImage="https://corepunk.com/images/og-image.jpg"
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-primary to-secondary">
        <div className="container mx-auto px-4 py-8">
          <VideoSection />
          <DownloadSection />
          <ImageGallery />
          <ContentGrid />
        </div>
      </div>
    </>
  );
}