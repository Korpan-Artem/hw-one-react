import './themes/App.css';
// import user from './user.json';
// import friends from './friends.json';
// import { Profile } from './components/Profile';
// import { FriendList } from './components/FriendList';
import { TodoList } from './components/TodoList';
import { useState , useEffect} from 'react/cjs/react.development';
//import { Context } from './context'
function App() {

  const [todos,setTodos] = useState([]);

  const [todoTitle, setTodoTitle] = useState('');
  useEffect (() => {
    const raw = localStorage.getItem('todos');
    setTodos(JSON.parse(raw));
  },[] )

  useEffect (() => {
    localStorage.setItem('todos',JSON.stringify(todos))
  },[todos] )
  
const addTodo = event => {
  if (event.key === 'Enter') {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        title: todoTitle,
        completed: false,
      }
    ])
    setTodoTitle('');
  }
}

  return (
    <>
    {/* <Profile 
      name={user.name} 
      tag={user.tag} 
      location={user.location} 
      avatar={user.avatar} 
      stats={user.stats}
    />
    <FriendList friends={friends}/>
    <TodoList></TodoList>*/}
   
      <div>
        <h1>Todo App</h1>
        <input 
          type="text"
          value={todoTitle}
          onChange={event => setTodoTitle(event.target.value)}
          onKeyPress={addTodo}
        />
        <TodoList todos={todos}></TodoList>
      </div>

    </> 
  );
}

export default App;
