import React from 'react'
import { connect, styled, Head } from 'frontity'
import dayjs from 'dayjs'

const Post = ({ state, libraries }) => {
    const data = state.source.get(state.router.link)
    const post = state.source[data.type][data.id]
    const author = state.source.author[post.author]
    const id = post.featured_media
    const media = state.source.attachment[id]

    const formattedDate = dayjs(post.date).format("DD MMMM YYYY")

    const Html2React = libraries.html2react.Component;

    return (
        <div>
            <Head>
                <title>{post.title.rendered}</title>
                <meta name="description" content={post.excerpt.rendered} />
            </Head>
            { id > 0 ? <img src={media.source_url} /> : null}
            <h2>{post.title.rendered}</h2>
            {data.isPost ? <PostInfo>
                <p>
                    <strong>Posted: </strong>
                    {formattedDate}
                </p>
                <p>
                    <strong>Author: </strong>
                    {author.name}
                </p>
            </PostInfo> : null} 
            <Html2React html={post.content.rendered} />
        </div>
    )
}

export default connect(Post)

const PostInfo = styled.div`
  background-color: white;
  margin-bottom: 1em;
  padding: 0.5em;
  border-left: 4px solid #38C287;
  font-size: 0.8em;

  & > p {
    margin: 0;
  }
`