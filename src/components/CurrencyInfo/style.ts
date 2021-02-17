import styled from 'styled-components';
import tokens from "theme/tokens";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${tokens.spacingMedium};
`;

export const Text = styled.span`
  color: ${tokens.colorSecondary};
  font-size: ${tokens.fontSizeSmall};
  font-family: ${tokens.fontFamilyItalic};
`;

export const Bold = styled.span`
  font-family: ${tokens.fontFamilyBoldItalic};
`;

export { };
