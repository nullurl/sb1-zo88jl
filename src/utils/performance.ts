export const imageLoader = ({ src, width, quality = 75 }) => {
  return `${src}?w=${width}&q=${quality}&auto=format`;
};

export const lazyLoadOptions = {
  threshold: 0.1,
  rootMargin: '50px',
};

export const optimizeImageSrc = (src: string, size: number = 800) => {
  if (src.startsWith('http')) {
    return `${src}?w=${size}&q=75&auto=format`;
  }
  return src;
};