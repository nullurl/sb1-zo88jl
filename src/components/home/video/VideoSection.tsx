import React from 'react';
import { useTranslation } from 'next-i18next';
import VideoPlayer from './VideoPlayer';
import VideoCaption from './VideoCaption';

export default function VideoSection() {
  const { t } = useTranslation('common');
  const videoId = 'ae77e853-3eed-4f64-876a-c1dec57f9fe9';

  return (
    <section className="relative w-full max-w-6xl mx-auto mb-16">
      <VideoPlayer 
        videoId={videoId}
        title="Corepunk Official Trailer"
      />
      <VideoCaption 
        text={t('home.videoCaption')}
      />
    </section>
  );
}