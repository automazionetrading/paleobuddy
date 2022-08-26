import SeoHead from '@/components/SeoHead';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

// <!-- Google tag (gtag.js) -->
// <script async src="https://www.googletagmanager.com/gtag/js?id=G-9MVJ9G145W"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'G-9MVJ9G145W');
// </script>

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <SeoHead />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
