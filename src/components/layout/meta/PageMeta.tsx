import Head from 'next/head';
import { generateMetaTags } from '@/utils/seo/meta-tags';
import { SEOProps } from '@/utils/seo/types';

export default function PageMeta({ title, description, keywords, ogImage }: SEOProps) {
  const metaTags = generateMetaTags({ title, description, keywords, ogImage });
  
  return (
    <Head>
      <title>{`${title} | Corepunk Wiki`}</title>
      {metaTags.map((tag, index) => (
        <meta
          key={index}
          {...(tag.name ? { name: tag.name } : {})}
          {...(tag.property ? { property: tag.property } : {})}
          content={tag.content}
        />
      ))}
    </Head>
  );
}