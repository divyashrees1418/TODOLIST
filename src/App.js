import React,{useState} from 'react';
import Work from './work';
import Usertext from './Usertext';
import './styles.css';

function Todolist() {
    const [items,setitems]=useState([]);

    const additem= (inputText)=>{
        setitems((previousitem) =>{
            return[...previousitem,inputText]
        });
    };


    const deleteitem=(id)=>{
        setitems((previousitem)=>
        {
            return previousitem.filter((item,index)=>
            {
                return index!==id;
            })
        })
    };


   
    return(
        <div className="container">
            <div className='heading'>
                <h1>To Do List</h1>
                </div>
                <Usertext additem={additem}/>
                <div>
                    <ul>
                        {
                            items.map((item,index)=>
                                {
                                    return(
                                        <Work key={index} text={item}  deleteitem={deleteitem} id={index}/>

                                    )
                                })
                        }
                    </ul>
                </div>
        </div>

    )
}

export default Todolist;