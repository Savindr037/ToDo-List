import React, { useState } from 'react'
import TodoList from './TodoList';
import './TodoPage.css'
// import { FcPlus } from 'react-icons/fc'

function TodoPage() {

    const [inputList, setInputList] = useState("");
    function itemEvent(event) {
        setInputList(event.target.value);
    }


    const [showItems, setShowItems] = useState([]);
    function addItems() {

        if (inputList === "") {
            setShowItems((oldItems) => {
                return [...oldItems];
            });
        }
        else if (inputList !== "") {
            setShowItems((oldItems) => {
                return (
                    [...oldItems, inputList].map(element => {
                        return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();
                    })
                );
            });
        }

        setInputList("");
    }


    function deleteItem(id) {
        setShowItems((oldItems) => {
            return oldItems.filter((arrElement, index) => {
                return index !== id;
            });
        });

    }


    return (
        <>
            <div className="todoLayoutContainer">
                <div className="todoLayout">
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <div className="input1tbnContainer">
                        <input type="text" placeholder='Add Items' onChange={itemEvent} value={inputList} />

                        <button onClick={addItems}>+{/* <FcPlus className='plusIcon' /> */}</button>
                    </div>
                    <br />

                    <ul>
                        {/* <p>{inputList}</p> */}

                        {
                            showItems.map((returnItem, index) => {
                                return (
                                    <TodoList
                                        text={returnItem}
                                        key={index}
                                        id={index}
                                        onSelect={deleteItem} />

                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default TodoPage;