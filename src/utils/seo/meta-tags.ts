import { MetaTag } from './types';

export const generateMetaTags = (params: {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
}): MetaTag[] => {
  const { title, description, keywords = [], ogImage } = params;
  
  const tags: MetaTag[] = [
    {
      name: 'description',
      content: description
    },
    {
      name: 'keywords',
      content: ['corepunk', 'mmorpg', 'gaming', ...keywords].join(', ')
    },
    {
      property: 'og:title',
      content: title
    },
    {
      property: 'og:description',
      content: description
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: title
    },
    {
      name: 'twitter:description',
      content: description
    }
  ];

  if (ogImage) {
    tags.push(
      {
        property: 'og:image',
        content: ogImage
      },
      {
        name: 'twitter:image',
        content: ogImage
      }
    );
  }

  return tags;
};