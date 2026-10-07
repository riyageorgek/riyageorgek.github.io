import { useEffect } from 'react';

export function useVersionCheck() {
  useEffect(() => {
    // Store the build timestamp in localStorage on first load
    const lastBuildTime = localStorage.getItem('app_build_time');
    const currentBuildTime = new Date().getTime().toString();

    if (!lastBuildTime) {
      // First visit
      localStorage.setItem('app_build_time', currentBuildTime);
    } else if (lastBuildTime !== currentBuildTime) {
      // Build time changed - user has a new version
      console.log('New version deployed. Hard refreshing...');
      // Force a hard refresh to clear cache
      window.location.replace(window.location.href);
    }
  }, []);
}
