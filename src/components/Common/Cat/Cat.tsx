/** @jsxImportSource @emotion/react */
import { useContext } from 'react';
import Lottie from 'lottie-web-react';
import { css } from '@emotion/react';
import ThemeContext from '../../../theme-context';

import { catThemes } from '../../../constants';

function Cat() {
  const { mode } = useContext(ThemeContext);

  const options = {
    loop: true,
    autoplay: true,
    path: catThemes[mode],
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie options={options} isStopped={false} isPaused={false} />;
}

export default Cat;
