export const siteConfig = {
  name: 'Corepunk Wiki',
  description: 'Your Ultimate Guide to Corepunk MMORPG',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://corepunk-wiki.netlify.app',
  ogImage: 'https://corepunk.com/images/og-image.jpg',
  links: {
    discord: 'https://discord.gg/corepunk',
    twitter: 'https://twitter.com/corepunkgame',
    github: 'https://github.com/corepunk-community/wiki'
  }
};

export const gameConfig = {
  downloadSize: '20 GB',
  systemRequirements: {
    os: 'Windows 10 64-bit',
    cpu: 'Intel Core i5 or AMD equivalent',
    ram: '8 GB',
    gpu: 'NVIDIA GTX 960 or better',
    storage: '20 GB available space'
  }
};