import styled from 'styled-components';
import tokens from "theme/tokens";

export const Container = styled.div`
  position: relative;
`;

export const InputContainer = styled.div<{ hasHelp: boolean }>`
  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: 0;
    box-sizing: border-box;
    
    border-radius: ${tokens.borderRadiusSmall};
    border: ${tokens.borderWidthSmall} solid ${tokens.colorPrimaryLight};
    transition: border 0.3s ease;
      
    color: ${tokens.colorNeutralDark};
    background: ${tokens.colorNeutralLight};
    font-size: ${tokens.fontSizexSmall};
    padding: ${tokens.spacingxSmall};
    margin: 5px 0 
        ${props => props.hasHelp ? tokens.spacingBottomSmall : tokens.spacingBottomMedium} 0;
    
    width: 100%;
    height: 37px;
    
    &:focus {
      border: ${tokens.borderWidthSmall} solid ${tokens.colorSecondaryLight};
    }
  }
`;

export const Label = styled.label`
  color: ${tokens.colorPrimary};
  font-size: ${tokens.fontSizexSmall};
  line-height: ${tokens.lineHeightMedium};
`;

export const Help = styled.span`
  font-size: ${tokens.fontSizexXSmall};
  line-height: ${tokens.lineHeightSmall};;
  color: ${tokens.colorPrimaryMedium};
  font-family: ${tokens.fontFamilyBold};
  margin-bottom: ${tokens.spacingBottomMedium};
  display: block;
`;

export { };
