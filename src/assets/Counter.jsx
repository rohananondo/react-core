import { useState } from "react"

export default function Counter (){
    const [ count,setCount]=useState(0)
    const likeButton =()=>{
        const newCount=count+1;
        setCount(newCount);
    }
    const disButton=()=>{
        const newCount=count-1;
        setCount(newCount);
    }
    return (
        <div style={{border:'2px solid red'}}>
            <h3>Counter : {count}</h3>
            <button onClick={likeButton} style={{margin:'20px'}}>Like</button>
            <button onClick={disButton} style={{margin:'20px'}}>Dislike</button>
        </div>
    )
}