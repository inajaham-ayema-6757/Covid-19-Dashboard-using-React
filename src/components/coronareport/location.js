import React from 'react'
import styled from "@emotion/styled"

const Location = ({loc}) => {

    const Container = styled.div`
        font-family: Georgia, 'Times New Roman', Times, serif;
        color: white;
        font-size: 1.5em;
    `
    return ( 
        <Container>
            <h1 className="world">{loc}</h1>
        </Container>
     );
}
 
export default Location;