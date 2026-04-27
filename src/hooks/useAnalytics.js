import { useEffect } from 'react';

// TODO: Implement Google Analytics / Mixpanel hook stub
export default function useAnalytics() {
  useEffect(() => {
    // Initialize analytics here
    // console.log("Analytics initialized");
  }, []);

  const trackEvent = (eventName, data) => {
    // Track event
  };

  return { trackEvent };
}
