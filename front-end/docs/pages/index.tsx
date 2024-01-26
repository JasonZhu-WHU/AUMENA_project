import * as React from 'react';
<<<<<<< HEAD
import Head from 'docs/src/modules/components/Head';
// import NoSsr from '@mui/material/NoSsr';
=======
import NoSsr from '@mui/material/NoSsr';
>>>>>>> 5cbe910ddcef8a39a7318378ef779c12aecc0bbc
import Divider from '@mui/material/Divider';
import Head from 'docs/src/modules/components/Head';
import AppHeader from 'docs/src/layouts/AppHeader';
// import Hero from 'docs/src/components/home/Hero';
import References, { CORE_CUSTOMERS } from 'docs/src/components/home/References';
<<<<<<< HEAD
// import ProductSuite from 'docs/src/components/home/ProductSuite';
import MethodName from 'docs/src/components/home/MethodName';
// import ValueProposition from 'docs/src/components/home/ValueProposition';
// import DesignSystemComponents from 'docs/src/components/home/DesignSystemComponents';
// import Testimonials from 'docs/src/components/home/Testimonials';
// import Sponsors from 'docs/src/components/home/Sponsors';
// import HeroEnd from 'docs/src/components/home/HeroEnd';
// import AppFooter from 'docs/src/layouts/AppFooter';
import BrandingProvider from 'docs/src/BrandingProvider';
// import NewsletterToast from 'docs/src/components/home/NewsletterToast';
// import AppHeaderBanner from 'docs/src/components/banner/AppHeaderBanner';
=======
import ProductSuite from 'docs/src/components/home/ProductSuite';
import ValueProposition from 'docs/src/components/home/ValueProposition';
import DesignSystemComponents from 'docs/src/components/home/DesignSystemComponents';
import Testimonials from 'docs/src/components/home/Testimonials';
import Sponsors from 'docs/src/components/home/Sponsors';
import HeroEnd from 'docs/src/components/home/HeroEnd';
import AppFooter from 'docs/src/layouts/AppFooter';
import BrandingCssVarsProvider from 'docs/src/BrandingCssVarsProvider';
import NewsletterToast from 'docs/src/components/home/NewsletterToast';
import AppHeaderBanner from 'docs/src/components/banner/AppHeaderBanner';
>>>>>>> 5cbe910ddcef8a39a7318378ef779c12aecc0bbc

export default function Home() {
  return (
    <BrandingCssVarsProvider>
      <Head
<<<<<<< HEAD
        title="Method Name Recognition and Recommendation"
        description="Method Name Recognition and Recommendation"
      />
=======
        title="MUI: The React component library you always wanted"
        description="MUI provides a simple, customizable, and accessible library of React components. Follow your own design system, or start with Material Design."
        card="/static/social-previews/home-preview.jpg"
      >
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'MUI',
              url: 'https://mui.com/',
              logo: 'https://mui.com/static/logo.png',
              sameAs: [
                'https://twitter.com/MUI_hq',
                'https://github.com/mui/',
                'https://opencollective.com/mui-org',
              ],
            }),
          }}
        />
      </Head>
      <NoSsr>
        <NewsletterToast />
      </NoSsr>
      <AppHeaderBanner />
>>>>>>> 5cbe910ddcef8a39a7318378ef779c12aecc0bbc
      <AppHeader />
      <main id="main-content">
        <MethodName />
        <References companies={CORE_CUSTOMERS} />
<<<<<<< HEAD
        <Divider />
      </main>
      
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "MUI",
  "url": "https://mui.com/",
  "logo": "https://mui.com/static/logo.png",
  "sameAs": [
    "https://twitter.com/MUI_hq",
    "https://github.com/mui/",
    "https://opencollective.com/mui"
  ]
}
          `,
        }}
      />
    </BrandingProvider>
=======
        <Divider />
        <ProductSuite />
        <Divider />
        <ValueProposition />
        <Divider />
        <DesignSystemComponents />
        <Divider />
        <Testimonials />
        <Divider />
        <Sponsors />
        <Divider />
        <HeroEnd />
        <Divider />
      </main>
      <AppFooter />
    </BrandingCssVarsProvider>
>>>>>>> 5cbe910ddcef8a39a7318378ef779c12aecc0bbc
  );
}
