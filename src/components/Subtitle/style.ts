import styled from 'styled-components';
import tokens from 'theme/tokens';

export const H2Subtitle = styled.h2`
  font-family: ${tokens.fontFamilyBoldItalic};
  font-size: ${tokens.fontSizeSmall};
  line-height: ${tokens.lineHeightLarge};
  text-transform: uppercase;
  color: ${tokens.colorSecondaryDark};
  padding-bottom: ${tokens.spacingBottomSmall};
  border-bottom: ${tokens.borderWidthSmall} solid ${tokens.colorOpacitySecondary};
  margin-bottom: ${tokens.spacingBottomLarge};
  width: 161px;
`;

export {};