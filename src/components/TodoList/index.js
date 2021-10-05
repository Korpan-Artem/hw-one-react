
import React from "react";
import { TodoItem } from "../TodoItem";

export const TodoList = ({todos}) => {
    const lisJSX = todos.map(({id,title,completed}) => <TodoItem key={id} title={title} completed={completed}></TodoItem>);
    return ( 
        <ul>{lisJSX}</ul>
    )
}