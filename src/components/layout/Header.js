import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { menuData } from "../../data/MenuData"
import MenuButton from "../buttons/MenuButton"

export default function Header() {
  return (
    <Wrapper>
      <Link to="/">
        <img src="/images/logos/logo.svg" alt="Logo" />
      </Link>
      <MenuWrapper count={menuData.length}>
        {menuData.map((item, index) => (
          <MenuButton item={item} key={index} />
        ))}
      </MenuWrapper>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  position: absolute;
  top: 50px;
  display: grid;
  grid-template-columns: 44px auto;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
`
const MenuWrapper = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(${props => props.count}, auto);
`
