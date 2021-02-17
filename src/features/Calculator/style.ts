import styled from 'styled-components';
import tokens from 'theme/tokens';

export const Container = styled.div`
  display: flex;
  height: 389px;
  max-width: 608px;
  margin: 0 auto;
  border: 1px solid ${tokens.colorNeutralMedium};
  border-radius: ${tokens.borderRadiusSmall};
  margin-top: 156px;

  @media only screen and (max-width: ${tokens.mobileBreakpoint}) {
    flex-direction: column;
    margin-top: 0;
    height: 100%;
    overflow: hidden;
  }
`;

export {};
