import React from 'react';
import { useTranslations } from '@/utils/i18n/useTranslations';
import { FaDownload } from 'react-icons/fa';
import { gameConfig } from '@/config/site';

export default function DownloadSection() {
  const { t } = useTranslations();

  return (
    <section className="bg-gradient rounded-lg max-w-4xl mx-auto mb-16 p-8 sm:p-12 animate-fade-in">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4 text-white">
          Join the Adventure Today!
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Download Corepunk and begin your journey
        </p>
        
        <a
          href="https://corepunk.com/en-us/download"
          className="btn-primary text-xl shadow-lg group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDownload className="mr-2 group-hover:scale-110 transition-transform" />
          Download Now
          <span className="text-sm ml-2 opacity-75">({gameConfig.downloadSize})</span>
        </a>

        <div className="mt-12 text-left max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-6 text-white">
            System Requirements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(gameConfig.systemRequirements).map(([key, value]) => (
              <div key={key} className="text-gray-300 flex items-start space-x-2">
                <span className="font-semibold min-w-[80px]">{key.toUpperCase()}:</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}