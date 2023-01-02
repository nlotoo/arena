import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useStateContext } from '../../context/stateContext';

import './BracketComponent3.css'


export const BracketComponent3 = () => {

    const [teams, setTeams] = useState([]);
    const [curentRound, setNextRound] = useState([]);
    const [roundOne, setRounOne] = useState([]);
    const [roundTwo, setRoundTwo] = useState([]);
    const [roundThree, setRoundThree] = useState([]);
    const [final, setFinal] = useState([]);

    const [games, setGamers] = useState([]);

    const { contextData } = useStateContext();

    console.log(contextData);


    let arr = [];

    function sortingPlayer() {

        let obj;
        // console.log(contextData.teams)

        let counter = 0;
        let arrIndex = 0;
        let teamA = {};
        let teamB = {};

        for (let i = 0; i < contextData.teams.length; i++) {


            if (counter < 1) {
                teamA = contextData.teams[i]
                counter++
            } else if (counter == 1) {
                teamB = contextData.teams[i]
                counter++
            }

            if (counter === 2) {
                arr.push({ id: arrIndex, teams: [teamA, teamB] })
                arrIndex++;
                counter = 0
            }
        }



        setGamers(arr)
        // console.log(arr)
    }
    console.log(games)


    let players = [
        { id: 0, teams: [{ name: 'Team A', score: 10 }, { name: 'Team B', score: 20 }] },
        { id: 1, teams: [{ name: 'Team C', score: 30 }, { name: 'Team D', score: 25 }] },
        { id: 2, teams: [{ name: 'Team E', score: 34 }, { name: 'Team F', score: 6 }] },
        { id: 3, teams: [{ name: 'Team G', score: 10 }, { name: 'Team H', score: 20 }] },
        { id: 4, teams: [{ name: 'Team I', score: 12 }, { name: 'Team J', score: 23 }] },
        { id: 5, teams: [{ name: 'Team L', score: 42 }, { name: 'Team L', score: 67 }] },
        { id: 6, teams: [{ name: 'Team M', score: 46 }, { name: 'Team N', score: 77 }] },
        { id: 7, teams: [{ name: 'Team O', score: 26 }, { name: 'Team P', score: 32 }] },
        { id: 8, teams: [{ name: 'Team Q', score: 86 }, { name: 'Team R', score: 72 }] },

    ];

    useEffect(() => {
        setNextRound(games);

    }, [games])

    function Battles() {

        let battle = [];
        let counter = 0;
        let result = [];




        for (let i = 0; i < curentRound.length; i++) {
            // console.log(curentRound[i].teams[0].score)
            // console.log(curentRound[i].teams[1].score)

            if (counter < 2) {

                if (curentRound[i].teams[0].score > curentRound[i].teams[1].score) {
                    // console.log(curentRound[i].teams[0])
                    counter++;
                    battle.push(curentRound[i].teams[0]);
                } else if (curentRound[i].teams[0].score < curentRound[i].teams[1].score) {
                    // console.log(curentRound[i].teams[1])
                    counter++;
                    battle.push(curentRound[i].teams[1]);
                }

                // console.log(roundTwo)
                if (counter == 2) {
                    result.push({ id: i, teams: battle })
                    battle = [];
                    counter = 0;
                }

            }

        }

        setNextRound(result);


    }


    function A() {

        Battles(teams);

        if (curentRound.length == 1) {
            setFinal(curentRound);
            // console.log('final is load ', final);

        }
        if (curentRound.length == 2) {
            setRoundThree(curentRound);
            // console.log('group3 is load ', roundThree);

        }

        if (curentRound.length == 4) {
            setRoundTwo(curentRound);
            // console.log('group2 is load ', roundTwo);

        }

        if (curentRound.length == 9) {
            setRounOne(curentRound);
            // console.log('group1 is load ', roundOne);
        }

    }

    function reload() {
        window.location.reload();
    }


    return (

        <div>
            <div className='team-name'><span>team name: </span>{contextData?.MyTeam}</div>

            <Link to='/' className='button' ><i className="fa-solid fa-arrow-left"></i></Link>
            <button type='button' className='button' onClick={A}>Go to next round</button>
            <button type='button' className='button' onClick={reload}>Reload groups</button>
            <button type='button' className='button' onClick={sortingPlayer}> sort</button>
            {/* <Link to="/register-team" className="button" >Join in Tournament</Link> */}
            {contextData?.teams == undefined ? <div><Link to='/register-team'>You need to add teams. Go and add more teams</Link></div> : ''}
            <div className='tournamet'>
                <div className='group-one'>
                    <div className="round-details">Round 1<br /><span className="date">March 16</span></div>
                    {roundOne.length == 0 ? <span className='span-group-msg'>Group not ready yet</span> : roundOne?.map((team) => {
                        console.log(team)

                        return (
                            <ul className='battle-container'>
                                <li className='match-group'>{team.teams[0].teamName} <span className='space'>Score:</span> {team.teams[0].score}p. </li>
                                <li className='match-group'>{team.teams[1].teamName} <span className='space'>Score:</span> {team.teams[1].score}p. </li>
                            </ul>
                        );

                    })}

                </div>
                <div className='group-two'>
                    <div className="round-details">Round 2<br /><span className="date">March 18</span></div>
                    {roundTwo.length == 0 ? <span className='span-group-msg'>Group not ready yet</span> : roundTwo?.map((team) => {
                        return (
                            <ul className='battle-container'>
                                <li className='match-group'>{team.teams[0].teamName} <span className='space'>Score:</span> {team.teams[0].score}p. </li>
                                <li className='match-group'>{team.teams[1].teamName} <span className='space'>Score:</span> {team.teams[1].score}p. </li>
                            </ul>
                        );

                    })}
                </div>

                <div className='group-three'>
                    <div className="round-details">Round 3<br /><span className="date">March 22</span></div>
                    {roundThree.length == 0 ? <span className='span-group-msg'>Group not ready yet</span> : roundThree?.map((team) => {
                        return (
                            <ul className='battle-container'>
                                <li className='match-group'>{team.teams[0].teamName} <span className='space'>Score:</span> {team.teams[0].score}p. </li>
                                <li className='match-group'>{team.teams[1].teamName} <span className='space'>Score:</span> {team.teams[1].score}p. </li>
                            </ul>
                        );

                    })}

                </div>
                <div className='group-four'>
                    <div className='final-details'>
                        <i className="fa fa-trophy"></i>
                        <div className="round-details">championship <br /><span className="date">March 30 - Apr. 1</span></div>
                    </div>
                    {final.length == 0 ? <span className='span-group-msg'>final not ready yet</span> : final?.map((team) => {
                        return (
                            <div>

                                <ul className='battle-container'>
                                    <li className='match-group'>{team.teams[0].teamName} <span className='space'>Score:</span> {team.teams[0].score}p. </li>
                                    <li className='match-group'>{team.teams[1].teamName} <span className='space'>Score:</span> {team.teams[1].score}p. </li>
                                </ul>
                            </div>
                        );

                    })}
                </div>
            </div>
        </div >
    );
}
