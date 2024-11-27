import React from 'react';
import { useTranslation } from 'next-i18next';
import DownloadButton from './DownloadButton';
import SystemRequirements from './SystemRequirements';

export default function DownloadSection() {
  const { t } = useTranslation('common');

  return (
    <section className="bg-gradient-to-br from-primary/80 to-secondary/80 py-16 px-4 rounded-lg max-w-4xl mx-auto mb-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4 text-white">
          {t('home.downloadTitle')}
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          {t('home.downloadSubtitle')}
        </p>
        
        <DownloadButton 
          size={t('home.downloadSize')}
          url="https://corepunk.com/en-us/download"
        />

        <SystemRequirements />
      </div>
    </section>
  );
}