import { useState } from "react";

export default function Button(){
    const [ count,setCount]=useState(0)
    
    const uploadItem=()=>{
        const newCount=count+1;
        setCount(newCount)
    }
    const cancleItem=()=>{
        const newCount=count-1;
        setCount(newCount);
    }
    return (
        <div>
            <h1>upload Items:{count}</h1>
            <button onClick={uploadItem}>Upload</button>
            <button onClick={cancleItem}>Cancle</button>
        </div>
    )
    
} 