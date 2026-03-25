const HaalaLogo = ({ size = 'md', dark = false }: { size?: 'xs'|'sm'|'md'|'lg'|'xl', dark?: boolean }) => {
  const sizes = { xs: 'text-lg', sm: 'text-xl', md: 'text-2xl', lg: 'text-3xl', xl: 'text-4xl' };
  if (dark) return (
    <span className={`font-bold tracking-tight ${sizes[size]}`} style={{ fontFamily: "'Google Sans Display', sans-serif" }}>
      <span className="text-white">Haala</span>
    </span>
  );
  return (
    <span className={`font-bold tracking-tight ${sizes[size]}`} style={{ fontFamily: "'Google Sans Display', sans-serif", letterSpacing: '-0.02em' }}>
      <span style={{ color: '#1A73E8' }}>H</span>
      <span style={{ color: '#EA4335' }}>a</span>
      <span style={{ color: '#34A853' }}>a</span>
      <span style={{ color: '#FBBC04' }}>l</span>
      <span style={{ color: '#EA4335' }}>a</span>
    </span>
  );
};

export default HaalaLogo;
