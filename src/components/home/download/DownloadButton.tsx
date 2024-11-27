import React from 'react';
import { useTranslation } from 'next-i18next';
import { FaDownload } from 'react-icons/fa';

interface DownloadButtonProps {
  size: string;
  url: string;
}

export default function DownloadButton({ size, url }: DownloadButtonProps) {
  const { t } = useTranslation('common');

  return (
    <a
      href={url}
      className="inline-flex items-center px-8 py-4 bg-accent hover:bg-accent/80 text-white font-bold rounded-lg transition-colors shadow-lg text-xl gap-2"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaDownload />
      {t('home.downloadButton')}
      <span className="text-sm ml-2">({size})</span>
    </a>
  );
}