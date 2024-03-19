import { useEffect, useState } from 'react'
import './Friends.css'
import Fnd from './Fnd'


export default function Friends(){

    // 1
    const [friend, setFriend]=useState([])

    // 2
    useEffect(()=>{
        // 3
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setFriend(data))
    },[])
    return (
        <div className='box'>
            <h1>Friends:{friend.length}</h1>
            {
                friend.map(fd=><Fnd
                friend={friend}></Fnd>)
            }
        </div>
    )
}


//1 state to hold data
// 2 use useEffect
// 3 use fetch to load data
// set loded data to state