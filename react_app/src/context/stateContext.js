import { createContext, useContext, useState } from "react"
import { RegisterTeam } from "../core/core.sevrice";



const Context = createContext();


export const StateContext = ({ children }) => {


    const contextValue = 'magare'
    let [teamName, setTeamName] = useState();
    let [listOfPlayer, setListOfPlayer] = useState();
    let [tournamet, setTournament] = useState();
    let contextData = tournamet;

    console.log(contextData)
    const registerTeamContext = (teamName) => {
        return RegisterTeam(teamName)
    }

    const registerTeams = (data) => {
        setListOfPlayer(data)
    }


    const tournametPeralnq = (data) => {
        console.log(data)
        setTournament(data)
        return data
    }


    return (
        <Context.Provider value={
            {
                contextValue,
                teamName,
                setTeamName,
                registerTeamContext,
                registerTeams,
                setListOfPlayer,
                listOfPlayer,
                tournametPeralnq,
                contextData,
            }
        }>{children}
        </Context.Provider>
    )
}





export const useStateContext = () => useContext(Context)