import React, { useState } from 'react'
import './TodoList.css'

function TodoList(props) {

    return (
        <>
            <div className="listContainer">

                <li>{props.text}</li>

                <button className='deleteItemBtn'
                    onClick={() =>{
                        props.onSelect(props.id)
                    }} >x
                </button>

            </div>

        </>

    )
}

export default TodoList;