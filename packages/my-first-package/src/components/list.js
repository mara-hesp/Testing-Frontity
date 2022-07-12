import React from 'react'
import { connect, styled } from 'frontity'
import Link from '@frontity/components/link'

const List = ({ state, actions, libraries }) => {
    const data = state.source.get(state.router.link)

    const Html2React = libraries.html2react.Component

    return (
        <Items>
            {data.items.map((item) => {
                const post = state.source[item.type][item.id]
                const featured = post.featured_media
                const media = state.source.attachment[featured]
                return (
                    <PostList key={item.id}>
                        {featured > 0 ? <CoverImg src={media.source_url} /> : null}
                        <div>
                            <h3>{post.title.rendered}</h3>
                            <Html2React html={post.excerpt.rendered} />
                            <Link key={item.id} link={post.link}>
                                <span>Read more →</span> 
                            </Link>
                        </div>
                    </PostList>
                )
            })}
            <PrevNextNav>
                {data.previous && (
                    <button onClick={() => {
                        actions.router.set(data.previous)
                    }}
                    >
                        &#171; Prev
                    </button>
                )}
                {data.next && (
                    <button onClick={() => {
                        actions.router.set(data.next)
                    }}
                    >
                        Next &#187;
                    </button>
                )}
            </PrevNextNav>
        </Items>
    )
}

export default connect(List)

const Items = styled.div`
  & > a {
    display: block;
    margin: 6px 0;
    font-size: 1.2em;
    text-decoration: none;
  }
`

const PrevNextNav = styled.div`
  padding-top: 1.5em;
  display: flex;
  justify-content: center;

  & > button {
    background: #eee;
    text-decoration: none;
    padding: 0.5em 1em;
    color: #888;
    border: 1px solid #aaa;
    font-size: 0.8em;
  }
  & > button:hover {
    cursor: pointer;
  }
`

const PostList = styled.div`
display: flex;
margin: auto;
margin-bottom: 2em;
padding: 2em;
box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
background-color: white;

& div {
    margin-left: 2em;
}

& p {
    color: #6D6D6D;
  }

& h3 {
    color: #4A4A4A;
}
`

const CoverImg = styled.img`
width: 500px;
`