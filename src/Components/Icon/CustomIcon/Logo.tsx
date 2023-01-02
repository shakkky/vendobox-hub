export const Logo = ({ size = 'sm', stroke = '#1E1E1E' }) => {
  const height = size === 'sm' ? 29.3 : size === 'md' ? 44 : 80;
  const width = size === 'sm' ? 19.3 : size === 'md' ? 29 : 58;
  const strokeWidth = size === 'sm' ? 0.5 : size === 'md' ? 1 : 1.5;
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect // outer box
        x="0.5"
        y="0.5"
        width="96.5%"
        height="93.1%"
        rx="0.5"
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      <rect // window
        x="12%"
        y="7.9%"
        width="65.5%" // 19 / 29 = 0.655 -> 65.5%
        height="61.3%"
        rx="0.5"
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      <rect // door
        x="12%"
        y="76%"
        width="65.5%"
        height="10%"
        rx="0.5"
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      <line // lines down the right side
        x1="82.75%"
        y1="14.7%"
        x2="93%"
        y2="14.7%"
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      <line
        x1="82.75%"
        y1="19.3%"
        x2="93%"
        y2="19.3%"
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      <line
        x1="82.75%"
        y1="80.6%"
        x2="93%"
        y2="80.6%"
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      <line // foot
        x1="12.5%"
        y1="93.1%"
        x2="12.5%"
        y2="100%"
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      <line // foot
        x1="87.9%"
        y1="93.1%"
        x2="87.9%"
        y2="100%"
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      <line
        x1="10.3%"
        y1="19.3%"
        x2="79.3%"
        y2="19.3%"
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      <line
        x1="10.3%"
        y1="30.6%"
        x2="79.3%"
        y2="30.6%"
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      <line
        x1="10.3%"
        y1="44.3%"
        x2="79.3%"
        y2="44.3%"
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      <line
        x1="10.3%"
        y1="57.9%"
        x2="79.3%"
        y2="57.9%"
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      <line
        x1="36.2%"
        y1="6.8%"
        x2="36.2%"
        y2="18.1%"
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      <line
        x1="56.8%"
        y1="31.8%"
        x2="56.8%"
        y2="43.1%"
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};
