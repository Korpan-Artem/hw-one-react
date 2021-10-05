import React, { useState } from "react";
import "./style.css"
export const TodoItem = ({title,completed}) => {
    const [checked,setChecked] =  useState(completed);

    const cls = ['todo'];

    if (checked) {
        cls.push('completed');
    }
    return (
        <>    
            <li className={cls.join(' ')} >
                <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)}/>
                <span></span>
                <span>{title}</span>
            </li>
        </>
    )
}

export default TodoItem;