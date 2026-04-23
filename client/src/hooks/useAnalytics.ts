/**
 * Custom hook for Google Analytics event tracking
 * Provides methods to track user interactions and conversions
 */

export const useAnalytics = () => {
  // Initialize gtag if it exists
  const gtag = (window as any).gtag;

  const trackEvent = (
    eventName: string,
    eventParams?: Record<string, any>
  ) => {
    if (gtag) {
      gtag('event', eventName, eventParams);
    } else {
      console.warn('Google Analytics not initialized');
    }
  };

  // Track specific conversion events
  const trackConversions = {
    // Track CTA button clicks
    clickCTA: (ctaText: string) => {
      trackEvent('cta_click', {
        cta_text: ctaText,
        timestamp: new Date().toISOString(),
      });
    },

    // Track WhatsApp widget interactions
    whatsappOpen: () => {
      trackEvent('whatsapp_widget_open', {
        timestamp: new Date().toISOString(),
      });
    },

    whatsappMessage: (messagePreview: string) => {
      trackEvent('whatsapp_message_sent', {
        message_preview: messagePreview.substring(0, 50),
        timestamp: new Date().toISOString(),
      });
    },

    // Track language changes
    languageChange: (language: string) => {
      trackEvent('language_changed', {
        language: language,
        timestamp: new Date().toISOString(),
      });
    },

    // Track sitemap menu opens
    sitemapOpen: () => {
      trackEvent('sitemap_menu_open', {
        timestamp: new Date().toISOString(),
      });
    },

    // Track section views
    sectionView: (sectionName: string) => {
      trackEvent('section_viewed', {
        section: sectionName,
        timestamp: new Date().toISOString(),
      });
    },

    // Track scroll depth
    scrollDepth: (percentage: number) => {
      trackEvent('scroll_depth', {
        depth_percentage: percentage,
        timestamp: new Date().toISOString(),
      });
    },

    // Track page load time
    pageLoadTime: (loadTime: number) => {
      trackEvent('page_load_time', {
        load_time_ms: loadTime,
        timestamp: new Date().toISOString(),
      });
    },

    // Track link clicks
    linkClick: (linkUrl: string, linkText: string) => {
      trackEvent('link_click', {
        link_url: linkUrl,
        link_text: linkText,
        timestamp: new Date().toISOString(),
      });
    },
  };

  return {
    trackEvent,
    trackConversions,
  };
};
