import React, { useEffect, useState } from 'react'




export const BracketComponent3 = () => {



    const [roundOne, setRoundOne] = useState();
    const [roundTwo, setRoundTwo] = useState();
    const [roundThree, setRoundThree] = useState();
    const [teams, setTeams] = useState();
    const [next, setNextBattles] = useState();


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
        setRoundOne(players);
    }, [])

    function Battles(teams) {


        let battle = [];
        let counter = 0;
        let result = [];


        for (let i = 0; i < roundOne.length; i++) {
            // console.log(roundOne[i].teams[0].score)
            // console.log(roundOne[i].teams[1].score)
            if (counter < 2) {

                if (roundOne[i].teams[0].score > roundOne[i].teams[1].score) {
                    // console.log(roundOne[i].teams[0])
                    counter++
                    battle.push(roundOne[i].teams[0])
                } else if (roundOne[i].teams[0].score < roundOne[i].teams[1].score) {
                    // console.log(roundOne[i].teams[1])
                    counter++
                    battle.push(roundOne[i].teams[1])
                }

                // console.log(roundTwo)
                if (counter == 2) {
                    result.push({ id: i, teams: battle })
                    battle = [];
                    counter = 0;
                }

            }

        }

        setNextBattles(result)
        setRoundTwo(result)


    }


    function A() {

        setTeams(roundOne)
        Battles(teams)
        console.log(roundTwo)
        console.log(next)

        // let battle = [];
        // let counter = 0;
        // let result = [];


        // for (let i = 0; i < roundOne.length; i++) {
        //     // console.log(roundOne[i].teams[0].score)
        //     // console.log(roundOne[i].teams[1].score)
        //     if (counter < 2) {

        //         if (roundOne[i].teams[0].score > roundOne[i].teams[1].score) {
        //             // console.log(roundOne[i].teams[0])
        //             counter++
        //             battle.push(roundOne[i].teams[0])
        //         } else if (roundOne[i].teams[0].score < roundOne[i].teams[1].score) {
        //             // console.log(roundOne[i].teams[1])
        //             counter++
        //             battle.push(roundOne[i].teams[1])
        //         }

        //         // console.log(roundTwo)
        //         if (counter == 2) {
        //             result.push({ id: i, teams: battle })
        //             battle = [];
        //             counter = 0;
        //         }

        //     }

        // }

        // setRoundTwo(result)
    }

    function B() {

        if (roundTwo == undefined) {
            return console.log('state is empty');
        } else {

            let battle = [];
            let counter = 0;
            let result = [];


            for (let i = 0; i < roundTwo.length; i++) {
                // console.log(roundTwo[i].teams[0].score)
                // console.log(roundTwo[i].teams[1].score)
                if (counter < 2) {

                    if (roundTwo[i].teams[0].score > roundTwo[i].teams[1].score) {
                        // console.log(roundTwo[i].teams[0])
                        counter++
                        battle.push(roundTwo[i].teams[0])
                    } else if (roundTwo[i].teams[0].score < roundTwo[i].teams[1].score) {
                        // console.log(roundTwo[i].teams[1])
                        counter++
                        battle.push(roundTwo[i].teams[1])
                    }

                    // console.log(roundTwo)
                    if (counter == 2) {
                        result.push({ id: i, teams: battle })
                        battle = [];
                        counter = 0;
                    }

                }

            }

            setRoundThree(result)

        }
    }


    function C() {
        if (roundThree == undefined) {
            console.log('state is empty');
        } else {
            console.log(roundThree)
        }
    }


    return (

        <div>
            BracketComponent3

            <button type='button' onClick={A}>round One</button>
            <button type='button' onClick={B}>Round Two</button>
            <button type='button' onClick={C}>Round Three</button>
        </div>
    )
}
