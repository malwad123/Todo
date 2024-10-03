import React from "react";
import { useState } from "react";


function Counter(){
    
        let[count , setCount]=useState(0);
    function increment(){
        setCount(count+1);
        console.log(count);
    
    }
    function decrement(){
        setCount(count-1);
        console.log(count);
        

    }
    function reset(){

        setCount(0);
    }
    
    return(
    
        <>
        
        
        <h1>{count}</h1>
        <button onClick={()=>increment()}>Inc</button>
        <button onClick={()=>decrement()}>DEC</button>
        <button onClick={()=>reset()}>Reset</button>
        </>
    )
    }

export default Counter;