import React from 'react';
import { SvgIcon } from '@material-ui/core';

const rotation = type => {
  if (type === 'down') return 'rotate(180 16 16)';
  if (type === 'flat') return 'rotate(90 16 16)';
  return 'rotate(0 0 0)';
};

export const Arrow = ({ type, ...props }) => (
  <SvgIcon
    width="32"
    height="32"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      id="General-User---SAA-Selling-Agent-+-Office-Admin"
      fill="none"
      fillRule="evenodd"
      transform={rotation(type)}
    >
      <g
        id="5.2---Local-Office-Analytics"
        transform="translate(-486 -278)"
        fill="currentColor"
      >
        <g id="Stats" transform="translate(226 168)">
          <g id="Stats-Block-#1" transform="translate(52 90)">
            <path
              d="M224,48 C217.383,48 212,42.617 212,36 C212,29.383 217.383,24 224,24 C230.617,24 236,29.383 236,36 C236,42.617 230.617,48 224,48 L224,48 Z M224,20 C215.164,20 208,27.164 208,36 C208,44.836 215.164,52 224,52 C232.836,52 240,44.836 240,36 C240,27.164 232.836,20 224,20 L224,20 Z M225.346,28.581 C224.971,28.209 224.462,28 223.929,28 C223.397,28 222.888,28.209 222.513,28.581 L216.579,34.581 C215.796,35.356 215.796,36.612 216.579,37.387 C217.362,38.163 218.63,38.163 219.413,37.387 L222,34.754 L222,37 L222,42.02 C222,43.114 222.886,44 223.98,44 L224.02,44 C225.114,44 226,43.114 226,42.02 L226,37 L226,35.057 L226.26,35.099 L228.509,37.326 C229.218,38.029 230.353,38.2 231.165,37.619 C232.196,36.882 232.281,35.45 231.421,34.598 L225.346,28.581 Z"
              id="Icon"
            />
          </g>
        </g>
      </g>
    </g>
  </SvgIcon>
);
