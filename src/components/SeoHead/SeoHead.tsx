import Head from 'next/head';
import Script from 'next/script';

export default function SeoHead(): JSX.Element {
  const isProd = process.env.NODE_ENV === 'production';
  return (
    <>
      {isProd && (
        <>
          <Script
            strategy="afterInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=G-9MVJ9G145W"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-9MVJ9G145W');
          `}
          </Script>
        </>
      )}
      <Head>
        <title>PALEO MEAL BUDDY 🍽️</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Crea facilmente tantissime idee di ricette Paleo."
        />

        <meta
          property="og:url"
          content="https://paleobuddy.vercel.app/"
          key="og:url"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Paleo Meal Buddy" />
        <meta
          property="og:description"
          content="Crea facilmente tantissime idee di ricette Paleo."
        />
        <meta
          property="og:image"
          content="https://paleobuddy.vercel.app/images/og-cover-image.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="paleobuddy.vercel.app" />
        <meta property="twitter:url" content="https://paleobuddy.vercel.app/" />
        <meta name="twitter:title" content="Paleo Meal Buddy" />
        <meta
          name="twitter:description"
          content="Crea facilmente tantissime idee di ricette Paleo."
        />
        <meta
          property="twitter:image"
          content="https://paleobuddy.vercel.app/images/og-cover-image.png"
        />
      </Head>
    </>
  );
}
