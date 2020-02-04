import React, { ReactElement } from 'react';
import styled from "styled-components";
import HeaderLink from "./HeaderLink";
import Navbar from "./NavBar"
import HubbleLogo from "../../assets/images/HubbleLogo.png"

interface linkObj {
  name: string
  link: string
}

interface IHeaderProps {
  links?: Array<linkObj>
}

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: flex-start;
  height: 60px;
`

const Img = styled.img`
  height: 90%;
`
const Index: React.SFC<IHeaderProps> = (props) => {
  return (
    <HeaderWrapper>
      <Img src={HubbleLogo} />
      {props.links && <Navbar>
        {props.links?.map(({name, link}) => {
          return <HeaderLink to={link}>{name}</HeaderLink>
        })}
      </Navbar>}
    </HeaderWrapper>
  )
}

export default Index
