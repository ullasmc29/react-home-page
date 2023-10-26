import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//const Contact = () => 
    function react() {
    const shoot = () => {
        alert("Great Shot!");
      } 
    return <form>
    <label>Name :
      <input type="text" />
    </label>
    <label>email-id
      <input type="text" />
    </label>
    <button onClick={shoot}>BUTTON</button>
  </form>;
  };
  const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<react/>);
  export default Contact;