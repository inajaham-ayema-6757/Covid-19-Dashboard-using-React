import React from 'react'
import styled from "@emotion/styled"
import Location from './location'

const CoronaDashBoard = (props) => {

    const highcolor = props.colorh;
    const lowcolor = props.colorl;
    const Card = styled.div`
        margin-left: 5%;
        background: linear-gradient(to bottom, ${highcolor}, ${lowcolor});
        width: 26.66%;
        height: 590px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        border-radius: 20px;
    `
    const Stats = styled.div`
        font-size: 1em;
        text-align: center;
    `

    return ( 
        <Card>
            <Location loc={props.loc}/>
            <Stats>
                <h2>Total Cases: -</h2>
                <h2>{props.total}</h2>
                <h2>Active Cases: -</h2>
                <h2>{props.active}</h2>
                <h2>Recovered Cases: -</h2>
                <h2>{props.recovered}</h2>
                <h2>Deaths: -</h2>
                <h2>{props.death}</h2>   
            </Stats>
        </Card> 

     );
}
 
export default CoronaDashBoard;
