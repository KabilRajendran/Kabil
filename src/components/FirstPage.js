import React, { Component } from 'react'
import Signup from './Signup';
import Login from './Loginpage'
import {Link,Route} from 'react-router-dom';



class FirstPage extends Component {

    clickHandler(){
      window.location.href = "./Signup"
    }

    submitHandler = (event) =>{
        event.preventDefault();
        console.log("submitted")
        window.location.href = "./Loginpage"
    }

    render() {
        console.log("clicked")
        return (
            <div>
                <div id="formContent">
      
      <h2 classNmae="active"> Sign In</h2>
      <h2 class="inactive underlineHover" onClick={this.clickHandler} name="signup">Sign Up</h2>

      <form onSubmit={this.submitHandler}>
        <input type="text" id="login" class="fadeIn second" name="login" placeholder="login"/>
        <input type="text" id="password" class="fadeIn third" name="login" placeholder="password"/>
        <input type="submit" class="fadeIn fourth" value="Log In"/>
      </form>

      {/* <!-- Remind Passowrd --/> */}
      <div id="formFooter">
        <input type="checkbox" className="underlineHover"></input>
        <a  href="#">Remember me?</a>
      </div>

    </div>
            </div>
        )
    }
}

export default FirstPage
