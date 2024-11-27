export const generateMetadata = (params: {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
}) => {
  const { title, description, keywords = [], ogImage } = params;
  
  return {
    title: `${title} | Corepunk Wiki`,
    description,
    keywords: ['corepunk', 'mmorpg', 'gaming', ...keywords].join(', '),
    openGraph: {
      title,
      description,
      images: ogImage ? [{ url: ogImage }] : undefined,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  };
};