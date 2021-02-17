import styled from 'styled-components';
import tokens from 'theme/tokens';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: start;
  min-width: 231px;
  height: 100%;
  background: ${tokens.colorOpacityPrimary};
`;

export const Items = styled.div`
  margin-left: ${tokens.spacingLarge};
  height: 70%;
  
  @media only screen and (max-width: ${tokens.mobileBreakpoint}) {
    margin-left: ${tokens.spacingInlineLarge};
  }
`;

export {};
