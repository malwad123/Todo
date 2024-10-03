import React, { Component, useState } from "react";

function Todo() {
  let [text, setText] = useState("");
  let [display, setDisply] = useState([]);

  function handleAdd() {
    let arr = [...display];
    if (text !== "") {
      arr.push(text);
      setDisply(arr);
    }
  }
  function handleDisplay(e) {
    setText(e.target.value);
    console.log(display);
    
  }

  function handleDelete(index)
  {
      let newdisplay=[...display];
      newdisplay.splice(index,1) ; 
     setDisply(newdisplay);
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h2 className="text-xl font-bold mb-4">Enter Text:</h2>

        <input
          type="text"
          placeholder="Add a text..."
          className="border border-gray-300 rounded-md p-2 mb-4 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => handleDisplay(e)}
            
        />

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          onClick={() => handleAdd()}
        >
          ADD
        </button>
       { 
        display.map((ele,index) => {

          return (
          <div >
            {/* <div key={index}> */}
        <li>{ele}</li>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          onClick={() =>handleDelete(index)}
        >Delete</button>
     
       
 </div>
          )
          
        })
      }
      </div>
    </>
  );
}

export default Todo;
