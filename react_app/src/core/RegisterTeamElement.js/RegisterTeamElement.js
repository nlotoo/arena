
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useStateContext } from '../../context/stateContext';
import './RegisterTeamElement.css'
const RegisterTeamElement = () => {

    const { teamName, setTeamName, registerTeamContext, registerTeams, listOfPlayer, } = useStateContext();

    let [teams, setTeams] = useState([]);


    async function loadPlayers() {
        let result = await fetch('http://localhost:5000/team-list')
        let res = await result.json();
        setTeams(res)
        registerTeams(res)
        return res
    }

    useEffect(() => {
        loadPlayers()
    }, [teams])

    async function registerTeam(event) {
        event.preventDefault();
        setTeamName(event.target.team.value);

        let res = await loadPlayers();
        registerTeams(res)

        if (res.length > 15) {
            return;
        }

        registerTeamContext(event.target.team.value)


    }

    useEffect(() => {
    }, [teams.length])







    return (
        <div className='registerd-page'>
            <div className='register-container'>
                {teamName &&
                    <div>
                        <p>Your registerd team: {teamName}</p>
                    </div>
                }
                <Link to='/' className='button'><i className="fa-solid fa-arrow-left"></i></Link>
                {/* <button className='button' type='button' onClick={loadPlayers} >LOAD TEAMS</button>
                OR */}
                <h1>Register yours Team</h1>
                <form className='register-form' onSubmit={registerTeam}>
                    <input type="text" name='team' placeholder='Team name'></input>
                    {teams.length == 15 ? <button type='submit' className='' disabled={teams.length == 15} >Register</button> : <button type='submit' className='button' disabled={teams.length == 17} >Register</button>}
                    {teams.length == 15 ? 'you have enough players' : ''}
                </form>

            </div>
            <div className='players-list'>
                {teams.length < 15 ? `you don't have enough players(need more ${16 - teams.length})` : <ol>
                    {teams?.map((listedTeam) => {
                        return <li key={listedTeam._id}><p>{listedTeam.teamName}</p></li>
                    })}
                </ol>

                }
                {teams.length > 14 && <Link to='/tournamet-loby' className='button'>Go to Tournnament Loby</Link>}

            </div>
        </div>

    )
}

export default RegisterTeamElement