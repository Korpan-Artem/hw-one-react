import './themes/App.css';

import { useEffect, useState } from 'react/cjs/react.development';

function App() {
  const [type,setType] = useState('users');

  useEffect (() => {
    console.log("type",type);
  },[type])
  return (

    <div>
      <h1>Ресурс:{type}</h1>

      <button onClick={() => {setType('users')}}>Users</button>
      <button onClick={() => {setType('todo');}}>Todo</button>
      <button onClick={() => {setType('posts')}}>Posts</button>

    </div>
  );
}

export default App;
