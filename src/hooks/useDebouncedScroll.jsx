import { useEffect, useState } from 'react';
import debounce from 'lodash.debounce';

const useDebouncedScroll = (delay) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = debounce(() => {
      setScrollPosition(window.scrollY);
    }, delay);

    window.addEventListener('scroll', handleScroll);

    return () => {
      handleScroll.cancel();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [delay]);

  return scrollPosition;
};

export default useDebouncedScroll;
