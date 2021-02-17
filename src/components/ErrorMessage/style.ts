import styled from "styled-components";
import tokens from "theme/tokens";

export const ErrorToast = styled.div<{ isVisible: boolean }>`
  position: fixed;
  width: 400px;
  left: 50%;
  transform: translateX(-50%);
  transition: all .5s;
  bottom: ${props => props.isVisible ? '60px' : '-80px'};

  background-color: ${tokens.colorOpacity};
  background: ${tokens.colorSupportError};
  margin-top: ${tokens.spacingSmall};
  border-radius: ${tokens.borderRadiusSmall};
  font-size: ${tokens.fontSizeSmall};
  box-shadow: ${tokens.boxShadowMedium};
`;

export const Message = styled.div`
  color: ${tokens.colorNeutralLight};
  padding: ${tokens.spacingSmall} ${tokens.spacingMedium};
  text-align: center;
`;
