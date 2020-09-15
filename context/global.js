import React,{createContext, useState} from 'react'

export const GlobalContext = createContext(null)

export const GlobalContextProvider = ({children}) => {
    const initialPlayers = [
        {
            id: "1",
            score: 0,
            name: "harry"
        },
        {
            id: "2",
            score: 0,
            name: "ron"
        }
    ]
    const [players, setPlayers] = useState(initialPlayers)
    const incPlayerScore = ((id) => {
        const n = [...players]
        const player = n.find(p => p.id === id)
        player.score += 10;
        setPlayers(n)
    })
    return (
        <GlobalContext.Provider value={{
            players,
            incPlayerScore
        }} >
            {children}

        </GlobalContext.Provider>
    )
}