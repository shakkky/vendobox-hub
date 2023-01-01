import React from 'react';
import { Loader } from 'react-loaders';

export default function Indicator({ size = 1, className = '' }) {
  return (
    <Loader
      type="line-scale"
      active
      className={className}
      style={{
        transform: `scale(${size})`,
      }}
    />
  );
}
