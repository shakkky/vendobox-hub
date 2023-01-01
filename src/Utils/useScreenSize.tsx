import { useState, useEffect, useRef } from 'react';
/**
 * based on material-ui breakpoints:
 * value         |0px     600px    960px    1280px   1920px
 * key           |xs      sm       md       lg       xl
 */
function getBreakpoint() {
  const width = window.innerWidth;
  if (width < 600) {
    return 'xs';
  }
  if (width < 960) {
    return 'sm';
  }
  if (width < 1280) {
    return 'md';
  }
  if (width < 1920) {
    return 'lg';
  }
  if (width < 2320) {
    return 'xl';
  }
  return 'xxl';
}
function useScreenSize() {
  const [breakpoint, setBreakpoint] = useState(getBreakpoint);
  const breakpointRef = useRef(getBreakpoint());
  useEffect(() => {
    let mounted = true;
    const func = () => {
      if (mounted) {
        const newBreakpoint = getBreakpoint();
        if (newBreakpoint !== breakpointRef.current) {
          breakpointRef.current = newBreakpoint;
          setBreakpoint(newBreakpoint);
        }
      }
    };
    window.addEventListener('resize', func);
    return () => {
      mounted = false;
      window.removeEventListener('resize', func);
    };
  }, []);
  return breakpoint;
}

export default useScreenSize;
