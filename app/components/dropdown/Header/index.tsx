import React, { ReactElement } from 'react'
import styled from "styled-components"

interface linkObj {
  name: string
  link: string
}

interface Props {
  links?: Array<linkObj>
}

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: flex-start;
`
const HeaderLink = styled.a`
`

export default function index({links}: Props): ReactElement {
  return (
    <HeaderWrapper>
      {links?.map(({name, link}) => {
        return <a href={link}>{name}</a>
      })}
    </HeaderWrapper>
  )
}
