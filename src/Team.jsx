import { useState } from "react"

export default function Team() {
    const [player, setPlayer]=useState(11)

        const addPlayer=()=>{
           const newPlayer=player+1;
            setPlayer(newPlayer);
        }
        
        const removePlayer=()=>{
            const newPlayer=player-1;
            setPlayer(newPlayer);
        }


    const teamStyle = {
        margin: '30px',
        border: '3px solid blue',
        backgroundColor: 'aquamarine',
        padding: '10px'
    }

    const buttonStyle={
        margin:'20px',
        padding:'10px'
    }
    return (
        <div style={teamStyle}>
            <h1>Players</h1>
            <h1 style={{margin:'20px',padding:'10px',backgroundColor:'aqua'}}>{player}</h1>
            <button onClick={addPlayer} style={buttonStyle}>Add Player</button>
            <button onClick={removePlayer} style={buttonStyle}>Remove Player</button>
        </div>
    )
}