
import './App.css';
import LoginScreen from './components/loginComponent/login'
import LoginForm from './components/loginForm/loginForm'
import Signup from './components/signupPage/signup'
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import DashBoard from './components/dashBoard/dashBoard'
import HackersInfo from './components/hackersInfo/hackersInfo'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
      <Route path="/login" component={LoginForm}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/dock" component={DashBoard}/>
      <Route path="/addHackers" component={HackersInfo}/>
      <Route path="/" component={LoginScreen}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
