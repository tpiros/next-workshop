import { UserProvider } from '@auth0/nextjs-auth0/client';
import { Ruda } from '@next/font/google';
import '../styles/globals.css';
import Layout from './components/Layout';

const ruda = Ruda({
  subsets: ['latin'],
  variable: '--font-ruda',
});

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <main className={`${ruda.variable} font-sans`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </UserProvider>
  );
}

export default MyApp;
