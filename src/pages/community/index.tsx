import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { FaDiscord, FaReddit, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Community() {
  const { t } = useTranslation('common');

  const socialLinks = [
    {
      platform: 'Discord',
      icon: FaDiscord,
      url: 'https://discord.gg/corepunk',
      description: 'Join our Discord community to chat with other players and stay updated.'
    },
    {
      platform: 'Reddit',
      icon: FaReddit,
      url: 'https://reddit.com/r/corepunk',
      description: 'Discuss strategies, share experiences, and get the latest news on Reddit.'
    },
    {
      platform: 'Twitter',
      icon: FaTwitter,
      url: 'https://twitter.com/corepunkgame',
      description: 'Follow us on Twitter for instant updates and announcements.'
    },
    {
      platform: 'YouTube',
      icon: FaYoutube,
      url: 'https://youtube.com/corepunk',
      description: 'Watch gameplay videos, tutorials, and developer updates.'
    }
  ];

  return (
    <>
      <Head>
        <title>Corepunk Community - Connect with Players</title>
        <meta 
          name="description" 
          content="Join the Corepunk community! Connect with players on Discord, Reddit, and social media. Share experiences and stay updated."
        />
        <meta name="keywords" content="Corepunk community, Corepunk Discord, Corepunk Reddit, Corepunk social" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Corepunk Community</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4 hover:shadow-lg transition-shadow"
            >
              <social.icon className="text-4xl text-accent" />
              <div>
                <h2 className="text-xl font-semibold">{social.platform}</h2>
                <p className="text-gray-600 mt-1">{social.description}</p>
              </div>
            </a>
          ))}
        </div>

        <section className="mt-12">
          <h2 className="text-3xl font-semibold mb-6">Community Events</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold">Weekly Community Meetup</h3>
                <p className="text-gray-600 mt-2">
                  Join us every Saturday for community discussions, gameplay sessions, and more!
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Screenshot Contest</h3>
                <p className="text-gray-600 mt-2">
                  Share your best Corepunk screenshots and win exclusive rewards.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
};