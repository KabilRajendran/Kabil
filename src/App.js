import React, { Component, Fragment } from 'react';
import './App.css';
import FirstPage from './components/FirstPage';
import Signup from './components/Signup';
import { BrowserRouter, Route ,Switch} from 'react-router-dom';
import Loginpage from './components/Loginpage';


class App extends Component {
  render(){
    return (
      <Fragment>
    <BrowserRouter>
    <div>
      <div>

      <Switch>

      <Route path="/Firstpage"  exact component={FirstPage} />
      <Route path="/Signup"  exact component={Signup} />
      <Route path="/Loginpage" exact component= {Loginpage}/>

      </Switch>
      
    </div>
    </div>
    </BrowserRouter>
    </Fragment>
    );
  }
}
export default App;