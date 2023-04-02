import React from 'react'
import './ListToShow.css';
import { BiEdit } from 'react-icons/bi';
import { MdOutlineDoneOutline } from 'react-icons/md';
import { RiDeleteBin5Fill } from 'react-icons/ri';



const ListToShow = ({ currentList, setcurrentList, isEditing, setIsEditing, CurrentValue, setCurrentValue, toggleButton
    , settoggleButton }) => {

    const deleteFunc = (id) => {
        const newList = currentList.filter((ele) => {
            return ele.id !== id
        })
        console.log(newList);
        setcurrentList(newList)
    }
    const editFunc = (id) => {
        const edit = currentList.find((ele) => {
            return ele.id === id
        })
        console.log(edit.CurrentValue);
        console.log(setCurrentValue);
        setCurrentValue(edit.CurrentValue)
        setIsEditing(id)

    }


    return (
        <>
            <div className="ListToShow">
                {currentList.map((ele) => {
                    return (
                        <>
                            <div className='list'>
                                <div className="data">
                                    <h3>{ele.CurrentValue}</h3>
                                </div>

                                <div className="btn">
                                    <div className="done"><MdOutlineDoneOutline /></div>
                                    <button style={{ color: "orange" }} onClick={() => {
                                        editFunc(ele.id)
                                        settoggleButton(false)
                                    }}><BiEdit /></button>

                                    <button style={{ color: "grey" }} onClick={() => {
                                        deleteFunc(ele.id)
                                    }}><RiDeleteBin5Fill /></button>

                                </div>
                            </div>

                        </>
                    );
                })}
            </div>
        </>
    );
}

export default ListToShow