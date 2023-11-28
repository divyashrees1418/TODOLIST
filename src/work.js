import React from 'react';
import './styles.css';

function Work(props) {
    return (
        <div className='itemsspace' onClick={() => props.deleteitem(props.id)}>
            <li>{props.text}</li>
        </div>

    )

}
export default Work;
