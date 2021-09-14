import { keyframes } from 'styled-components';

export const slideLeft = keyframes`
  0% {
    transform: translateX(0);
  }

  100% {
    opacity: 1;
    transform: translateX(-40vw);
  }
`