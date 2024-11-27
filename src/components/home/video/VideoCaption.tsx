import React from 'react';
import { useTranslation } from 'next-i18next';

interface VideoCaptionProps {
  text: string;
}

export default function VideoCaption({ text }: VideoCaptionProps) {
  return (
    <p className="text-center text-lg mt-4 text-gray-200">{text}</p>
  );
}