import styled, { css } from "styled-components";

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonContainerProps {
    variant: ButtonVariant;
}

const buttonVariants = {
    primary: 'purple',
    secondary: 'blue',
    danger: 'red',
    success: 'green',
};

export const ButtonContainer = styled.div<ButtonContainerProps>`
    width: 100px;
    height: 50px;
    border-radius: 4px;
    border: 0;
    margin: 8px;

    background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};

   /* ${(props) => {
    return css`
      background-color: ${buttonVariants[props.variant]};
    `
  }} */
`;
