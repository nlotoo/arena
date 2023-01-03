import React, { useEffect, useState } from 'react'
import { useStateContext } from '../../context/stateContext'
import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import './TournamentLoby.css'

function TournamentLoby() {

    let { listOfPlayer, tournametPeralnq, registerTeamContex, registerTeams } = useStateContext();

    const [sport, setSport] = useState('');


    function handleChange(event) {
        setSport(event.target.value)
    }


    async function loadPlayers() {
        let result = await fetch('http://localhost:5000/team-list')
        let res = await result.json();
        registerTeams(res)
        return res
    }

    useEffect(() => {
        loadPlayers()

    }, []);

    let torunametObj;

    function handleSubmit(event) {
        event.preventDefault();
        if (event.target.myTeam.value == '') {

            return;
        }


        if (listOfPlayer?.length > 15) {
            return
        }


        torunametObj = {
            MyTeam: event.target.myTeam.value,
            Tournamet: sport,
            teams: listOfPlayer,
        }
        torunametObj.teams.push({ _id: '626', teamName: `${event.target.myTeam.value}`, score: `${Math.floor(Math.random() * 101)}` })
        tournametPeralnq(torunametObj)

    }







    return (
        <div className='loby-container'>
            <div><span>Tournament Loby</span></div>
            <div>
                {listOfPlayer?.length < 15 && <Link to='/register-team'><div><span>You need more players for your tournamet, please add from register team page. Click here..</span></div></Link>}
                <ol>
                    {listOfPlayer?.map((team) => {
                        return <li key={team._id}>{team.teamName}</li>
                    })}
                </ol>

                <form className='form-container-loby' onSubmit={handleSubmit} >
                    <div>
                        <label>
                            Select sport: &nbsp;
                        </label>
                        <select className='button' onChange={handleChange}>
                            <option default value='default'>Choose option</option>
                            <option value='CHESS'>Chess</option>
                            <option value='FootBall'>FootBall</option>
                            <option value='NBA'>NBA</option>
                        </select>
                    </div>
                    <div>
                        <label>
                            Add your Team
                            <input className='button' name='myTeam' type='text'></input>
                        </label>
                        <div className='add-my-team-container'>
                            {listOfPlayer?.length < 16? <input className='button' disabled={torunametObj?.teams.length == 16} type="submit" value="Add my team" /> : ''}
                            <div className='error-msg'>
                                <p>
                                    {listOfPlayer?.length > 15 ? <span >You are READY join in tournament</span> : <span>You need to add you team before to continues</span>}
                                </p>
                            </div>
                        </div>
                    </div>
                </form>
                <Link className='button join-tournament' to='/bracket3'>Join in Tournamet</Link>
            </div>
        </div>
    )
}

export default TournamentLoby