import { useState, useEffect, useRef } from 'react';

const useContainerSize = () => {
  const ref = useRef(null);

  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  const handleSize = node => {
    setHeight(node.parentElement.offsetHeight);
    setWidth(node.parentElement.offsetWidth);
  };

  useEffect(
    () => {
      const node = ref.current;
      if (node) {
        handleSize(node);
        window?.addEventListener('resize', () => handleSize(node));
        return () =>
          window?.removeEventListener('resize', () => handleSize(node));
      }
    },
    [ref] // Recall only if ref changes
  );
  return { ref, height, width };
};

export default useContainerSize;
