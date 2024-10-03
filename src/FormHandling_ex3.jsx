import React from "react";
import { useState } from "react";

function FormHandling_ex3(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [submittedData, setSubmittedData] = useState(null);
    let [toggle, setToggle] = useState(false)
  
function handleName(e){

setName(e.target.value);

}
function handleEmail(e){

setEmail(e.target.value);
}

function handleSubmit(e){

    setSubmittedData({name,email});
    setToggle(true)
}


    return(

<>

<label>Name</label>
<input type="text"placeholder="" onChange={(e)=>handleName(e)}/>
<label>Email</label>
<input type="text"placeholder="" onChange={(e)=>handleEmail(e)}/>

<button onClick={(e)=>handleSubmit(e)}>Submit</button>
{console.log(toggle,"toggle value")
}


  {toggle &&
  
  <div>
    <h2>Submited information:</h2>
    <h2>Name:{ name}</h2>
    <h2>Email:{ email}</h2>
</div>
}
</>


    )
}
export default FormHandling_ex3;