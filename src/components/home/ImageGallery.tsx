import React from 'react';
import Image from 'next/image';
import { useTranslations } from '@/utils/i18n/useTranslations';

export default function ImageGallery() {
  const { t } = useTranslations();

  const images = [
    {
      src: 'https://corepunk.com/images/screenshots/screenshot1.jpg',
      alt: 'Corepunk Gameplay Screenshot 1',
      title: 'Epic Battle Scene'
    },
    {
      src: 'https://corepunk.com/images/screenshots/screenshot2.jpg',
      alt: 'Corepunk Gameplay Screenshot 2',
      title: 'Character Customization'
    },
    {
      src: 'https://corepunk.com/images/screenshots/screenshot3.jpg',
      alt: 'Corepunk Gameplay Screenshot 3',
      title: 'World Environment'
    },
    {
      src: 'https://corepunk.com/images/screenshots/screenshot4.jpg',
      alt: 'Corepunk Gameplay Screenshot 4',
      title: 'PvP Combat'
    }
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-white">
        {t('home.galleryTitle', 'Image Gallery')}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {images.map((image, index) => (
          <div key={index} className="relative group">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <h3 className="text-white text-xl font-semibold">{image.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}