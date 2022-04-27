// Importing all libs and files used
import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import { menuData } from "../../data/MenuData"
import MenuButton from "../buttons/MenuButton"
import MenuTooltip from "../tooltips/MenuTooltip"

// creating the Head component
export default function Header() {
  //declaring the isOpen useState hook to a boolean.
  const [isOpen, setIsOpen] = useState(false)
  function handleClick(event) {
    setIsOpen(!isOpen)
    event.preventDefault()
  }

  return (
    <Wrapper onClick={() => setIsOpen(!isOpen)}>
      <Link to="/">
        <img src="/images/logos/logo.svg" alt="Logo" />
      </Link>
      <MenuWrapper count={menuData.length}>
        {/* looping the menuData data inside the MenuButton component 
              the onClick event toggles the handleClick function which receives
              setIsOpen(!isOpen) and the prevent default
              */}
        {menuData.map((item, index) =>
          // if the item link is /account, then show the tooltip, otherwise, show just the button
          item.link === "/account" ? (
            <MenuButton
              item={item}
              key={index}
              onClick={event => handleClick(event)}
            />
          ) : (
            <MenuButton item={item} key={index} />
          )
        )}
        <HamburgerWrapper>
          <MenuButton
            item={{ title: "", icon: "/images/icons/hamburger.svg", link: "" }}
          />
        </HamburgerWrapper>
      </MenuWrapper>
      {/* This is the tooltip, and it receives the prop isOpen to toggle visibility */}
      <MenuTooltip isOpen={isOpen} />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  position: absolute;
  top: 60px;
  display: grid;
  grid-template-columns: 44px auto;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;

  @media (max-width: 850px) {
    top: 30px;
  }

  @media (max-width: 450px) {
    top: 20px;
    padding: 0 20px;
  }
`
const MenuWrapper = styled.div`
  display: grid;
  gap: 30px;
  /* dinamically repete the columns with as much content as it's added */
  grid-template-columns: repeat(${props => props.count}, auto);
  @media (max-width: 850px) {
    > a {
      display: none;
    }
    grid-template-columns: auto;
  }
`
const HamburgerWrapper = styled.div`
  display: none;

  @media (max-width: 850px) {
    display: block;
  }
`
