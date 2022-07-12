import React from "react"
import { connect, Global, css, styled, Head } from 'frontity'
import Switch from '@frontity/components/switch'
import List from './list'
import Post from './post'
import Destination from './destination'
import Loading from "./loading"
import Error from './error'
import Header from "./header"


const Root = ({ state }) => {
    const data = state.source.get(state.router.link)

  return (
    <>
    <Head>
      <title>My First Frontity Theme</title>
      <meta name="description" content="Based on the Frontity step by step tutorial" />
    </Head>
    <Global styles={css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      text-decoration: none;
      list-style: none;
    }
    html {
      font-family: system-ui, Verdana, Arial, sans-serif;
      background-color: #F5F5F5;
    }
    a {
      color: #38C287;
    }
    a:hover {
      cursor: pointer;
      color: #54DFA4;
    }
    `} />
      <Header />
      <Main>
        <Switch>
            <Loading when={data.isFetching} />
            <List when={data.isArchive} />
            <Post when={data.isPost} />
            <Post when={data.isPage} />
            <Destination when={data.isDestinations} />
            <Error when={data.isError} />
        </Switch>
      </Main>
    </>
  )
}

export default connect(Root)


const Main = styled.main`
  padding: 2em;
  margin: auto;
  width: 80%;
  img {
    max-width: 100%;
  }
  h2 {
    margin: 0.5em 0;
  }
  p {
    line-height: 1.25em;
    margin-bottom: 0.75em;
  }
  figcaption {
    color: #828282;
    font-size: 0.8em;
    margin-bottom: 1em;
  }
`