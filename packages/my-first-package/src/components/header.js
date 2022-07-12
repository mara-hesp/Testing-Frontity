import React from 'react'
import Link from '@frontity/components/link'
import { connect, styled } from 'frontity'


const Header = ({ state }) => {
    const data = state.source.get(state.router.link)

    return (
    <HeaderContainer isPostType={data.isPostType} isPage={data.isPage}>
      <HeaderContent>
        <h1>Frontity Workshop</h1>
        <Menu>
          <Link link='/'>Home</Link>
          <Link link="/destinations">Destinations</Link>
          <Link link='/about-us'>About Us</Link>
        </Menu>
      </HeaderContent>
    </HeaderContainer>
    )
}

export default connect(Header)

const HeaderContainer = styled.header`
background-color: white;

h1 {
  color: #4A4A4A;
}
`
const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  padding: 2em 1em;
  margin: auto;
`
const Menu = styled.nav`
display: flex;
flex-direction: row;
margin-top: 1em;
& > a {
  margin-right: 1em;
  color: #38C287;
  text-decoration: none;
}
& > a:hover {
  color: #54DFA4;
}
`
const Button = styled.button`
  background: transparent;
  border: none;
  color: #aaa;

  :hover {
    cursor: pointer;
    color: #888;
  }
`