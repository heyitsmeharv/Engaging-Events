import React from 'react';
import 'styled-components/macro';
import colour from 'resources/styles/colours';

import { Box } from '@material-ui/core';

import Header from 'components/Header/Header';

const Home = () => {
  return (
    <Box
      css={`
        background: ${colour.compliment};
        width: 100vw;
        height: 100vh;  
      `}
    >
      <Header />
    </Box>
  );
}

export default Home;
