import { ReactNode, CSSProperties, FC } from 'react';

interface ArabicTextProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const ArabicText: FC<ArabicTextProps> = ({ 
  children, 
  className = '',
  style 
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
