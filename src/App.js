import React, {useState} from 'react';
import './themes/App.css';
import { Tabs, Tab } from '@mui/material';
import { LoginForm } from './components/LoginForm';
import { SignUpForm } from './components/SignUpForm';


function App() {
  const [value, setValue] = useState(0); 

  const handleChange = (event, newValue) => {
     setValue(newValue);
   };
   
  const showLogInUIJsx = value === 0 && <LoginForm/>
  const showSignInUIJsx = value === 1 && <SignUpForm/>

 return(
  <div className="form-container"> 
    <Tabs 
      value={value}
      onChange={handleChange} 
      centered 
    >
      <Tab label="Log in"/> 
      <Tab label="Sign up"/>
    </Tabs>
    {showLogInUIJsx || showSignInUIJsx}
    </div>
   )

}

export default App;
