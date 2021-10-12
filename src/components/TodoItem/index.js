import React, { useState } from "react";

export const TodoItem = ({id,name,completed, onDelete,onUpdate,onCompleted}) => {

    const [value,setValue] = useState(name);
    const [isEdit,setIsEdit] = useState(false);

    const onDeleteItem = () => {
        onDelete(id);
    }

    const onUpdateItem = () => {
        onUpdate(id,value);
        setIsEdit(false);
    }

    const onCompletedItem = () => {
        onCompleted(id,completed);
    }
    return (               
        <li key={id}>
            <input type="checkbox" onChange={onCompletedItem}/>
            <span onClick={onDeleteItem}>Delete{'  '}</span>
            {
                isEdit ? <span onClick={onUpdateItem}>Save{'  '}</span> 
                :  
                <span onClick={() => setIsEdit(true)}>Edit{'  '}</span>
            }
            {
                isEdit ? 
                    <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
                :
                <span style={{textDecoration: completed ? 'line-through' : 'none'}}>{name} </span>
            }
           
        </li>
    )
}