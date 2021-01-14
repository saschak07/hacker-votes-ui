
import './App.css';
import LoginScreen from './components/loginComponent/login'
import LoginForm from './components/loginForm/loginForm'
import Signup from './components/signupPage/signup'
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import {Authcontext} from './context/authContext'
import { useState } from 'react';
import DashBoard from './components/dashBoard/dashBoard'

function App() {
  const [auth,setAuth] = useState({})
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
      <Authcontext.Provider value={[auth,setAuth]}>
      <Route path="/login" component={LoginForm}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/home" component={LoginScreen}/>
      <Route path="/dock" component={DashBoard}/>
      </Authcontext.Provider>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
