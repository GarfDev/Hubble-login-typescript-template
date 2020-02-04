import React from 'react';
import styled from "styled-components"

const ButtonStyled = styled.button`
  display: inline-block;
  box-sizing: border-box;
  padding: 0.25em 2em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  border: 2px solid #41addd;
  color: #41addd;
  &:active {
    background: #41addd;
    color: #fff;
  }
`
export interface IButtonProps {
  name?: string;
  type?: "button" | "submit" | "reset" | undefined
} 

const Button: React.SFC<IButtonProps> = (props) => {
  return (
  <ButtonStyled type={props.type}>{props.name}</ButtonStyled>
  )
}


export default Button