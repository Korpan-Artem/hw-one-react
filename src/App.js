import './themes/App.css';
import user from './user.json';
import friends from './friends.json';
import { Profile } from './components/Profile';
import { FriendList } from './components/FriendList';

function App() {
  return (
    <>
    <Profile 
      name={user.name} 
      tag={user.tag} 
      location={user.location} 
      avatar={user.avatar} 
      stats={user.stats}
    />
    <FriendList friends={friends}/>
    </>
  );
}

export default App;
