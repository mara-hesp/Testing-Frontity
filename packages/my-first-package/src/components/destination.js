import React from 'react'
import { connect, styled, Head } from 'frontity'

const Destination = ({ state, libraries }) => {
    const data = state.source.get(state.router.link)
    const destination = state.source[data.type][data.id]

    const Html2React = libraries.html2react.Component;

    return (
        <Content>
            <Head>
                <title>{destination.title.rendered}</title>
                <meta name="description" content={destination.excerpt.rendered} />
            </Head>
            <h2>{destination.title.rendered}</h2>
            <Html2React html={destination.content.rendered} />
        </Content>
    )
}

export default connect(Destination)

const Content = styled.div`
text-align: justify;
& h2 {
    text-align: center;
    color: #38C287;
}
`