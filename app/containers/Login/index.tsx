import * as React from 'react'
import styled from "styled-components"
import Header from "../../components/Header"
import Form, {Inputs} from "../../components/Form"
import { login } from "../../store/session/actions"
import { useDispatch } from "react-redux"

const LoginContentWrapper = styled.div`
  display: flex;
  height: 94vh;
  padding: 20px;
  justify-content: center;
  align-items: center;
`

interface ILoginStates {
  username: string | null
  password: string | null
}

interface ILoginProps {
  // ...
}

const Login: React.SFC<ILoginProps> = (props) => {
  const dispatch = useDispatch()
  const initalLoginState = {username:"",password:""}
  // Define States of Login Container Component
  const [values, setValues] = React.useState<{}|ILoginStates|null>(initalLoginState)

  //Define Array of Input Form this View need, not sure if this structure good of not
  const inputList : Inputs[] = [{name: "username"}, {name: "password"}]

  const handleOnChange = (event: React.FormEvent<HTMLFormElement>): void | undefined => {
    event.preventDefault()
    event.stopPropagation()
    const {name, value} = (event.target as HTMLInputElement)
    setValues({...values, [name]: value})
    // console.log({loginState: values})
  }

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>): void | undefined => {
    event.preventDefault()
    event.stopPropagation()
    const {username, password} = (values as any) // Have to do it like this, dont know how to resolve, will ask Huy Later
    dispatch(login(username, password))
  }

  return (
    <>
    <Header />
    <LoginContentWrapper>
      <Form inputLists={inputList} 
      handleOnChange={handleOnChange}
      handleOnSubmit={handleOnSubmit} />
    </LoginContentWrapper>
    </>
  )
}

export default Login