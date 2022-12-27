import { CollumTree } from "./collumTree/CollumTree";
import React, { useEffect } from 'react';
import styled, { keyframes } from "styled-components";
import time, { ArenaPage } from '../../game-structure/ArenaPage';


const Box = styled.div`
    margin:5px
    position: relative;
    height: 20rem;
    width: 20rem;
    background-color: red;
    border-radius: 100px;
    text-align: center;
    color: white;

    animation_duration: 1.5s;
`;
export const CollumTwo = (winners) => {

    // let winners = ArenaPage.winners
    let winersData = winners
    console.log("asdfa" + time);
    // console.log(winersData)
    // console.log(winersData.props)
    console.log(time)
    const [mounted, setMounted] = React.useState(false);
    useEffect(() => {
        setTimeout(() => setMounted(true), time);
    });
    return (
        <>
            <div className="round round-two">
                <div className="round-details">Round 2<br /><span className="date">March 18</span></div>
                {
                    winersData.props.map((x, i) => {

                        let arrElement = Object.entries(x)
                        return (
                            mounted && (

                                <Title className="matchup" key={i.toString()}>
                                    <li className="team team-top">{arrElement[0][1]}<span className="score">{arrElement[1][1]}</span></li>
                                    <li className="team team-bottom"  >{arrElement[2][1]}<span className="score">{arrElement[3][1]}</span></li>

                                </Title>
                                // todo da opravq round 2 zaradi css-a shot e
                            )
                        )
                    })
                }
            </div >
            <CollumTree props={winersData} />

        </>
    );

}
const Appearing = keyframes`
from {
    opacity: 0;
    transform: translateY(-10px);
}
to {
    opacity: 1;
    transform: translateY(0);
}

`;

const Title = styled.ul`
animation-name: ${Appearing};
animation-duration: 1s;
`;