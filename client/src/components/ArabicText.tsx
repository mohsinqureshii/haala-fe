import { ReactNode, CSSProperties } from 'react';

const ArabicText = ({ 
  children, 
  className = '',
  style 
}: { 
  children: ReactNode
  className?: string
  style?: CSSProperties
}) => (
  <span
    dir="rtl"
    lang="ar"
    className={className}
    style={{ fontFamily: "'Noto Sans Arabic', sans-serif", ...style }}
  >
    {children}
  </span>
);

export default ArabicText;
