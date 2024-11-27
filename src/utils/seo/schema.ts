import { Thing, WithContext } from 'schema-dts';

export const generateVideoGameSchema = (params: {
  name: string;
  description: string;
  genre?: string[];
  gamePlatform?: string[];
}): WithContext<Thing> => {
  const { name, description, genre = [], gamePlatform = [] } = params;

  return {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name,
    description,
    genre,
    gamePlatform,
    applicationCategory: 'Game',
    operatingSystem: 'Windows'
  };
};