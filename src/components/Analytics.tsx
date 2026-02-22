import { useEffect } from 'react';

import { useRouter } from 'next/router';
import Script from 'next/script';

import { GA_ADS_ID } from '../lib/googleAds';
import * as gtag from '../lib/gtag';

const Analytics = () => {
  const router = useRouter();

  // Track page views on route change
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  // Track all clicks (links, buttons) and form submissions
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Find the closest interactive element
      const link = target.closest('a');
      const button = target.closest('button');

      if (link) {
        const href = link.getAttribute('href') || '';
        const text = link.textContent?.trim() || '';
        const isExternal = link.hostname !== window.location.hostname;

        gtag.event({
          action: isExternal ? 'external_link_click' : 'internal_link_click',
          category: 'engagement',
          label: `${text} → ${href}`,
          value: undefined,
        });
      } else if (button) {
        const text = button.textContent?.trim() || '';
        const type = button.getAttribute('type') || 'button';

        gtag.event({
          action: 'button_click',
          category: 'engagement',
          label: `${text} (${type})`,
          value: undefined,
        });
      }
    };

    const handleSubmit = (e: Event) => {
      const form = e.target as HTMLFormElement;
      const action = form.getAttribute('action') || window.location.pathname;

      gtag.event({
        action: 'form_submit',
        category: 'conversion',
        label: action,
        value: undefined,
      });
    };

    document.addEventListener('click', handleClick);
    document.addEventListener('submit', handleSubmit);

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('submit', handleSubmit);
    };
  }, []);

  // Track scroll depth milestones
  useEffect(() => {
    const milestones = new Set<number>();
    const thresholds = [25, 50, 75, 100];

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;

      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      thresholds.forEach((threshold) => {
        if (scrollPercent >= threshold && !milestones.has(threshold)) {
          milestones.add(threshold);
          gtag.event({
            action: 'scroll_depth',
            category: 'engagement',
            label: `${threshold}%`,
            value: threshold,
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Script async src={GA_ADS_ID} crossOrigin="anonymous" />
    </>
  );
};

export default Analytics;
