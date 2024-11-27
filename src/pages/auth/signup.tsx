import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import AuthForm from '@/components/auth/AuthForm';
import PageMeta from '@/components/layout/meta/PageMeta';

export default function SignUp() {
  return (
    <>
      <PageMeta
        title="Sign Up"
        description="Create your Corepunk Wiki account"
        keywords={['sign up', 'register', 'account']}
      />
      <div className="max-w-2xl mx-auto py-12">
        <h1 className="text-3xl font-bold text-center mb-8">Create Account</h1>
        <AuthForm mode="signup" />
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      ...(await serverSideTranslations(context.locale ?? 'en', ['common'])),
    },
  };
};