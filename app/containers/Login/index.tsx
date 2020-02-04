import React, { ReactElement } from 'react'
import styled from "styled-components"

import H1 from "../../components/H1"

const LoginHeaderWrapper = styled.div`
  height: 6vh;
  padding: 20px;
  background-color: red;
`

const LoginContentWrapper = styled.div`
  height: 94vh;
  padding: 20px;
  background-color: blue;
`

const Login = ():ReactElement => {
  return (
    <>
    <LoginHeaderWrapper>
      <H1>Hubble Logo</H1>
    </LoginHeaderWrapper>
    <LoginContentWrapper>
      <H1>asdadasd</H1>
    </LoginContentWrapper>
    </>
  )
}

export default Login