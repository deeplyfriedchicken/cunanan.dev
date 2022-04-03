import { NavLink } from 'react-router-dom';
import { Link } from '@mui/material';

export type TMenuItem = {
  text: string;
  link?: string;
  exact?: boolean;
  useLink?: boolean;
  linkProps?: any;
};

function MenuItem({
  link,
  text,
  exact = false,
  useLink = false,
  linkProps,
}: TMenuItem) {
  return (
    <li>
      {useLink ? (
        <Link {...linkProps}>{text}</Link>
      ) : (
        <NavLink to={link} exact={exact} {...linkProps}>
          {text}
        </NavLink>
      )}
    </li>
  );
}

export default MenuItem;
