import React, { ReactElement } from "react"
import styled from "styled-components"
import GlobalStyle from "../../GlobalStyle"
import { Switch, Route } from 'react-router-dom'
import Login from "../Login"

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`
const Default = (): ReactElement => {
  return <h1>Working</h1>
}

export default function App(): ReactElement {
  return (
    <AppWrapper>
      <Switch>
        <Route exact path="/" component={Default} />
        <Route exact path="/login" component={Login} />
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  )
}

