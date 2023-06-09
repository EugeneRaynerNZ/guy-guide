import '../styles.css'
import Script from 'next/script';
// import { GoogleAnalytics } from "nextjs-google-analytics";

const App = ({ Component, pageProps }) => {
  return (
    <>
      {/* <GoogleAnalytics trackPageViews /> */}

      {/* Analytics */}
      <Script strategy="lazyOnload" onError={ (e) => { console.error('Analytics 1 failed to load', e) }} src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`} />
      <Script strategy="lazyOnload" onError={ (e) => { console.error('Analytics 2 failed to load', e) }}>
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
          `}
      </Script>

      {/* Adsense */}


      <Component {...pageProps} />
    </>
  );
};

export default App;