import styled from 'styled-components';
import tokens from 'theme/tokens';

export const Container = styled.div`
  width: 377px;
  padding: ${tokens.spacingInlineMedium} ${tokens.spacingInlineLarge};

  h1 {
    margin-bottom: ${tokens.spacingSmall};
  }

  input {
    max-width: 251px;
  }

  @media only screen and (max-width: ${tokens.mobileBreakpoint}) {
    width: 100%;
  }
`;

export {};