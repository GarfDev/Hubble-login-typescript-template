import * as React from 'react'
import styled from "styled-components"
import Input from "./Input"
import Button from "../Button"

export interface Inputs {
  name: string
}

export interface IFormButton {
  name: string
  type: string
}

interface IFormProps {
  handleOnChange?: (event: React.FormEvent<HTMLFormElement>) => void | undefined;
  handleOnSubmit?: (event: React.FormEvent<HTMLFormElement>) => void | undefined;
  inputLists?: Array<Inputs>
}

export interface IValues {
  [key: string]: string
}

export interface IErrors {
  [key: string]: string;
}

export interface IFormState {
  values: IValues
  errors: IErrors
}

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Index: React.SFC<IFormProps> = (props) => {

  const [values, setValue] = React.useState<IValues|undefined>(undefined);
  const [errors, setErrors] = React.useState<IErrors|undefined>(undefined);

  return (
    <FormWrapper onChange={props.handleOnChange} onSubmit={props.handleOnSubmit}>
      {props.inputLists && props.inputLists.map((input, index) => {
        return (
          <Input key={index} name={input.name} placeholder={input.name}></Input>
        )
      })}
      <Button type="submit" name="Login"/>
    </FormWrapper>
  )
}

export default Index