import { Link, LinkProps } from 'react-router-dom';
import { useLocale } from '../context/LocaleContext';

/**
 * Drop-in replacement for react-router Link.
 * Auto-prepends the active country code to absolute paths.
 * e.g. <LocaleLink to="/pricing"> → <Link to="/sa/pricing">
 */
export default function LocaleLink({ to, ...props }: LinkProps) {
  const { country } = useLocale();
  const href =
    typeof to === 'string' && to.startsWith('/')
      ? `/${country.code}${to}`
      : to;
  return <Link to={href} {...props} />;
}
