import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    console.log('Scroll to top');
    window.scrollTo(0, 0);
  }, [pathname]);
}

export default ScrollToTop;