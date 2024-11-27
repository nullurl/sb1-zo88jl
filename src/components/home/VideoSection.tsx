import React from 'react';
import { useTranslations } from '@/utils/i18n/useTranslations';

export default function VideoSection() {
  const { t } = useTranslations();

  return (
    <section className="relative w-full max-w-6xl mx-auto mb-16">
      <div className="relative pb-[56.25%] overflow-hidden rounded-lg shadow-xl">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/ae77e853-3eed-4f64-876a-c1dec57f9fe9"
          title="Corepunk Official Trailer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <p className="text-center text-lg mt-4 text-gray-200">
        {t('home.videoCaption', 'Discover the vast world of Corepunk - Where cyberpunk meets fantasy')}
      </p>
    </section>
  );
}