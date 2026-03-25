import { ReactNode } from 'react';

const ArabicText = ({ children, className = '' }: { children: ReactNode, className?: string }) => (
  <span
    dir="rtl"
    lang="ar"
    className={className}
    style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
  >
    {children}
  </span>
);

export default ArabicText;
