import React, { useEffect, useState } from 'react'

import './BracketComponent3.css'


export const BracketComponent3 = () => {

    const [teams, setTeams] = useState();
    const [curentRound, setNextRound] = useState([]);
    const [roundOne, setRounOne] = useState([])
    const [roundTwo, setRoundTwo] = useState([])
    const [roundThree, setRoundThree] = useState([])
    const [final, setFinal]=useState([])


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
        setNextRound(players);
    }, [])

    function Battles() {

        let battle = [];
        let counter = 0;
        let result = [];

        // ДА Сложа ифове за всеки роунд


        for (let i = 0; i < curentRound.length; i++) {
            // console.log(curentRound[i].teams[0].score)
            // console.log(curentRound[i].teams[1].score)

            if (counter < 2) {

                if (curentRound[i].teams[0].score > curentRound[i].teams[1].score) {
                    // console.log(curentRound[i].teams[0])
                    counter++
                    battle.push(curentRound[i].teams[0])
                } else if (curentRound[i].teams[0].score < curentRound[i].teams[1].score) {
                    // console.log(curentRound[i].teams[1])
                    counter++
                    battle.push(curentRound[i].teams[1])
                }

                // console.log(roundTwo)
                if (counter == 2) {
                    result.push({ id: i, teams: battle })
                    battle = [];
                    counter = 0;
                }

            }

        }

        setNextRound(result)


    }


    function A() {

        Battles(teams)
        console.log(curentRound)

    }

    function RoundOne() {
        setRounOne(curentRound)
    }
    function RoundTwo() {
        setRoundTwo(curentRound)
    }

    function reload() {
        window.location.reload()
    }




    return (

        <div>
            <button type='button' onClick={A}>Battle</button>
            <button type='button' onClick={RoundOne}>Battle1</button>
            <button type='button' onClick={RoundTwo}>Battle</button>

            <button type='button' onClick={reload}>reload groups</button>
            <div className='tournamet'>
                <div className='group-one'>
                    {curentRound?.map((team) => {
                        return (
                            <ul className='battle-container'>
                                <li>{team.teams[0].name} - score: {team.teams[0].score}p. </li>
                                <li>{team.teams[1].name} - score: {team.teams[1].score}p. </li>
                            </ul>
                        )

                    })}

                </div>
                {/* <div className='group-two'>
                    <ul className='battle-container'>
                        <li>Team A</li>
                        <li>Team B</li>
                    </ul>
                    <ul className='battle-container'>
                        <li>Team C</li>
                        <li>Team D</li>
                    </ul>
                    <ul className='battle-container'>
                        <li>Team E</li>
                        <li>Team F</li>
                    </ul>
                    <ul className='battle-container'>
                        <li>Team G</li>
                        <li>Team H</li>
                    </ul>
                </div>
                <div className='group-three'>
                    <ul className='battle-container'>
                        <li>Team A</li>
                        <li>Team B</li>
                    </ul>
                    <ul className='battle-container'>
                        <li>Team C</li>
                        <li>Team D</li>
                    </ul>

                </div>
                <div className='group-four'>
                    <h3>FINAL</h3>
                    <ul className='battle-container'>
                        <li>Team A</li>
                        <li>Team B</li>
                    </ul>
                </div> */}
            </div>
        </div >
    )
}
