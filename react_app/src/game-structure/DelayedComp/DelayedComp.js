import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ArenaPage } from '../../game-structure/ArenaPage';

const Box = styled.div`
    width: 100px;
    height: 100px;
    background-color: red;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 1s;
    transform: translate(${props => props.x}px, ${props => props.y}px);
`;

const data = [
    { t: 1000 },
    { t: 2000 },
    { t: 3000 },
    { t: 4000 },
]
export const DelayedComponent = ({ props }, { props1 }) => {
    console.log("asdfa" + props1.time);
    const [mounted, setMounted] = React.useState(false);
    useEffect(() => {
        setTimeout(() => setMounted(true), props1);
    });
    return (
        mounted && (
            <Box x={100} y={100} />
        )
    );
            
}

export default DelayedComponent;
