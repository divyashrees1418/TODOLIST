import React, { useState } from 'react';
import './styles.css';


function Usertext(props) {
    const [inputText, setInputText] = useState(" ");
    const handlerChange = (event) => {
        setInputText(event.target.value);
    };

    return (
        <div className='form'>
            <input type='text' onChange={handlerChange} value={inputText}></input>
            <button onClick={() => {
                props.additem(inputText);
                setInputText(" ");
            }}><span>Add</span></button>

        </div>
    )
}

export default Usertext;