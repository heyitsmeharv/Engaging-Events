import React from 'react';
import styled from 'styled-components/macro';
import colour from 'resources/styles/colours';
import { slideLeft } from 'resources/animations/animations';
import { Box, Zoom } from '@material-ui/core';

// images
import Icon from 'resources/images/EELogo.png';

const StyledImage = styled.img`
  width: 330px;
  height: 300px;
  border-radius: 50%;
  padding: 30px;
  background: ${colour.accent};
  animation: ${slideLeft} 1.5s forwards;
  animation-delay: 0.8s;
`;

export default function Header() {
  return (
    <Box
      css={`
        position: relative;
        text-align: center;
      `}
    >
      <Zoom in={true}>
        <StyledImage src={Icon} alt="engaging-event" />
      </Zoom>
    </Box>
  );
}