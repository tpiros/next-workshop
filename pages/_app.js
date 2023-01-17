import '../styles/globals.css';
import Layout from './components/Layout';
import { Ruda } from '@next/font/google';
const ruda = Ruda({
  subsets: ['latin'],
  variable: '--font-ruda',
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={`${ruda.variable} font-sans`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}

export default MyApp;
