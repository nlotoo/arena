import React, { useState } from 'react'
import { useStateContext } from '../../context/stateContext'
import { Link } from 'react-router-dom'
import './TournamentLoby.css'

function TournamentLoby() {

    let { listOfPlayer, tournametPeralnq, registerTeamContext } = useStateContext();
    console.log(listOfPlayer);
    const [sport, setSport] = useState('');

    function handleChange(event) {
        console.log(event.target.value);
        setSport(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();



        let torunametObj = {
            MyTeam: event.target.myTeam.value,
            Tournamet: sport,
            teams: listOfPlayer,
        }
        torunametObj.teams.push({ _id: '626', teamName: `${event.target.myTeam.value}`, score: `${Math.random() * 110}` })
        tournametPeralnq(torunametObj)

    }







    return (
        <div className='loby-container'>
            <div><span>Tournament Loby</span></div>
            <div>
                <ol>
                    {listOfPlayer?.map((team) => {
                        return <li key={team._id}>{team.teamName}</li>
                    })}
                </ol>
                <form className='form-container-loby' onSubmit={handleSubmit} >
                    <div>
                        <label>
                            Select sport
                        </label>
                        <select onChange={handleChange}>
                            <option default value='default'>Choose option</option>
                            <option value='CHESS'>Chess</option>
                            <option value='FootBall'>FootBall</option>
                            <option value='NBA'>NBA</option>
                        </select>
                    </div>
                    <div>
                         <label>
                            Add your Team
                            <input name='myTeam' type='text'></input>
                        </label>
                    </div>
                    <input className='button' type="submit" value="Add my team" />
                </form>
                <Link className='button join-tournament' to='/bracket3'>Join in Tournamet</Link>
            </div>
        </div>
    )
}

export default TournamentLoby