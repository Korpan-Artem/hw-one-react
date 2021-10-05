import React from "react";
import "./style.css"
export const TodoItem = ({title,completed}) => {
    return (
        <>    
            <li className="container-item">
                <span></span>
                <span>{title}</span>
                <span>{completed ? 'Done' : 'Not done'}</span>
            </li>
        </>
    )
}

export default TodoItem;