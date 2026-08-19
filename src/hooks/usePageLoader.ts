import { useEffect, useState } from "react";

export function usePageLoader(delay = 1000, fadeDuration = 600) {
  const [showLoader, setShowLoader] = useState(true);
  const [hideLoader, setHideLoader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHideLoader(true);

      const hideTimer = setTimeout(() => {
        setShowLoader(false);
      }, fadeDuration);

      return () => clearTimeout(hideTimer);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, fadeDuration]);

  return { showLoader, hideLoader };
}
