import React from 'react';
import { useTranslation } from 'next-i18next';

interface Requirement {
  label: string;
  value: string;
}

export default function SystemRequirements() {
  const { t } = useTranslation('common');

  const requirements: Requirement[] = [
    { label: 'OS', value: 'Windows 10 64-bit' },
    { label: 'CPU', value: 'Intel Core i5 or AMD equivalent' },
    { label: 'RAM', value: '8 GB' },
    { label: 'GPU', value: 'NVIDIA GTX 960 or better' },
    { label: 'Storage', value: '20 GB available space' }
  ];

  return (
    <div className="mt-8 text-left max-w-2xl mx-auto">
      <h3 className="text-xl font-semibold mb-4 text-white">
        {t('home.systemRequirements')}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {requirements.map((req, index) => (
          <div key={index} className="text-gray-300">
            <span className="font-semibold">{req.label}:</span> {req.value}
          </div>
        ))}
      </div>
    </div>
  );
}