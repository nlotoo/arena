import React from 'react';
import "./ArenaPage.css";
// import { CollumTree } from './collumTwo/collumTree/CollumTree';
// import { DelayedComponent } from './DelayedComp/DelayedComp';
import { CollumTwo } from './collumTwo/CollumTwo';
import styled from 'styled-components';
const time = 1500;
export const ArenaPage = () => {
    let winers = [];
    let game = {};
    let counter = 0;
    let groupCounter = 1;
    
    let playerData = [
        {
            player1: 'Pesho',
            player2: 'Gosho',
            score1: 0,
            score2: 10,
        },
        {
            player1: 'Ivan',
            player2: 'Todor',
            score1: 20,
            score2: 30,
        },
        {
            player1: 'Penka',
            player2: 'Maria',
            score1: 54,
            score2: 23,
        },
        {
            player1: 'Ivanka',
            player2: 'Ivan',
            score1: 12,
            score2: 20,
        },
        {
            player1: 'Mano',
            player2: 'Sara',
            score1: 30,
            score2: 54,
        },
        {
            player1: 'Sonic',
            player2: 'Jane',
            score1: 524,
            score2: 543,
        },
        {
            player1: 'Jonh',
            player2: 'Jen',
            score1: 143,
            score2: 5,
        },
        {
            player1: 'Joe',
            player2: 'Penka',
            score1: 43,
            score2: 54,
        },

    ]
    
    // async function sleepFor( sleepDuration ){
    //     var now = new Date().getTime();
    //      while( await new Date().getTime() < now + sleepDuration){ /* do nothing */ } 
    // }
    
   
    playerData.filter((a, i) => {
    
        if (a.score1 > a.score2)
        {
            game[`player${groupCounter + .1}`] = a.player1;
            game[`score${groupCounter + .1}`] = a.score1;
            counter++;

        } else
        {
            game[`player${groupCounter + .1}`] = a.player2;
            game[`score${groupCounter + .1}`] = a.score2;
            counter++;

        }

        if (counter === 2)
        {
            winers.push(game);
            counter = 0;
            game = {};
        }
        groupCounter++;
        // console.log(game)

    });
    
    // const Display = styled.div`
    // display: flex;
    // position: relative;
    // margin: 0px;
    // `
    
    return (

        <body>

            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet" />
            <link href='https://fonts.googleapis.com/css?family=Holtwood+One+SC' rel='stylesheet' type='text/css' />
            <link href='https://fonts.googleapis.com/css?family=Kaushan+Script|Herr+Von+Muellerhoff' rel='stylesheet' type='text/css' />
            <link href='https://fonts.googleapis.com/css?family=Abel' rel='stylesheet' type='text/css' />
            <link href='https://fonts.googleapis.com/css?family=Istok+Web|Roboto+Condensed:700' rel='stylesheet' type='text/css' />
            <header className="hero">
                <div className="hero-wrap">
                    <p className="intro" id="intro">BATE</p>
                    <h1 id="headline">Tournamenta</h1>
                    <p className="year"><i className="fa fa-star"></i> 2022 <i className="fa fa-star"></i></p>
                    <p>Za Nai Golemia</p>
                </div>
            </header>
            <h1>Arena Page</h1>
            <section id="bracket">
                <div className="container">
                    {
                        
                    } 
                    <div className="split split-one">
                        <div className="round round-one current">
                            <div className="round-details">Round 1<br /><span className="date">March 16</span></div>
                            {
                                playerData.map((x, i) => {
                                    return (
                                      
                                        <ul className="matchup" key={i.toString()}>
                                            <li className="team team-top">{x.player1}<span className="score">{x.score1}</span></li>
                                            <li className="team team-bottom"  >{x.player2}<span className="score">{x.score2}</span></li>
                                        </ul>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <CollumTwo props={winers} />

                </div>
            </section >
        </body>

    );
}  
export default time;