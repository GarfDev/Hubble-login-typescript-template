import React, { ReactElement } from "react"
import styled from "styled-components"
import GlobalStyle from "../../GlobalStyle"
import { Switch, Route } from 'react-router-dom'

import Dropdown from "../../components/dropdown"

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`

export default function App(): ReactElement {
  return (
    <AppWrapper>
      <Dropdown />
      <Switch>

      </Switch>
      <GlobalStyle />
    </AppWrapper>
  )
}