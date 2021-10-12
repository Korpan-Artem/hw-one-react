import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import { TodoItem } from "../TodoItem";
console.log(uuidv4());
export const TodoList = ({todos}) => {
    const [todo,setTodo] = useState('');
    const [list,setList] = useState([]);
    const onSave = () => {
        const data = {
            name: todo,
            id: uuidv4(),
            completed: false
        }
         setList((prevState) => {
            const prev = prevState ? prevState : {}
            return [...prev,data]
         })
         setTodo('');
    };

    const onDelete = (id) => {
        const newList = list.filter(item => item.id !== id);
        setList(newList);
    }

    const onUpdate = (id,text) => {
        const newList = list.map(item => item.id === id ? {...item,name: text}: item);
        setList(newList);
    }

    const onCompleted = (id, completed) => {
        const newList = list.map(item => item.id === id ? {...item,completed: !completed}: item);
        setList(newList);
    }

    const [filter,setFilter] = useState('');


    const handelChangeFilter = (e) => setFilter(e.target.value);  

    const visibleList = list.filter(item => item.name.includes(filter));


    return (
        <>
            <input
                    name="search"
                    type="text"
                    placeholder="Searc todo"
                    value={filter}
                    onChange={handelChangeFilter}
                />
            <form onSubmit={(e)=>{e.preventDefault()}}>
                <input
                    name="todo"
                    type="text"
                    placeholder="Add todo"
                    value={todo}
                    onChange={(e) => {
                        setTodo(e.target.value);
                    }}
                />
                <button disabled={todo < 1} onClick={onSave}>Add</button>
            </form>
            
            <ul>
                {
                     visibleList && visibleList.map((item) => (
                       <TodoItem 
                            onDelete={onDelete} 
                            onUpdate={onUpdate} 
                            id={item.id} 
                            name={item.name}
                            completed={item.completed}
                            onCompleted={onCompleted} 
                            key={item.id}
                        />
                     ))
                }
            </ul>
        </>
    )
}