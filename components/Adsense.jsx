import React, { useEffect } from "react";
import Script from 'next/script';

export default function Adsense() {
  const loadAds = () => {
    try {
      if (typeof window !== "undefined") {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (error) {
      console.log("adsense error", error.message);
    }
  };

  useEffect(() => {
    loadAds();
  }, []);

  return (
    // In article Ad Template
    <>
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1684783406695529"
     crossOrigin="anonymous"></Script>

      <ins className="adsbygoogle"
      style={{display: 'block'}}
      data-ad-client="ca-pub-1684783406695529"
      data-ad-slot="4686319427"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins>

      <Script>
        (adsbygoogle = window.adsbygoogle || []).push({});
      </Script>
    </>
  );
}