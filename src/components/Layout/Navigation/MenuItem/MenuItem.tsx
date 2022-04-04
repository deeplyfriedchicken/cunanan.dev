/** @jsxImportSource @emotion/react */
import { NavLink } from 'react-router-dom';
import { Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { css } from '@emotion/react';

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
  const theme = useTheme();

  return (
    <li>
      {useLink ? (
        <Link {...linkProps} sx={{ color: 'secondary.main' }}>
          {text}
        </Link>
      ) : (
        <NavLink
          to={link}
          exact={exact}
          {...linkProps}
          css={css`
            color: ${theme.palette.primary.main};
            &.active {
              border-bottom: 2px solid ${theme.palette.primary.main};
              opacity: 1;
            }
            &:hover:not(.active) {
              border-bottom: 2px solid ${theme.palette.primary.light};
              opacity: 0.75;
            }
          `}
        >
          {text}
        </NavLink>
      )}
    </li>
  );
}

export default MenuItem;
