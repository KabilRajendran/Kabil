import React, { Component } from 'react'
import { render } from 'react-dom'

class Signup extends Component {

    submitHandler = (event) =>{
        event.preventDefault();

        window.location.href = "./Loginpage"
    
    }
    clickHandler(){
        window.location.href = "./"
    }

        render() {
            console.log("vanthirchu")
            return (
                <div>
                    <div id="formContent">
                        <h2 class="inactive underlineHover" onClick={this.clickHandler} name="Sign in">Sign in</h2>
                        <h2 classNmae="active"> Sign Up</h2>
        
                        <form onSubmit={this.submitHandler}>
                            <input type="text" id="login" class="fadeIn second" name="login" placeholder="Email"/>
                            <input type="text" id="password" class="fadeIn third" name="login" placeholder="Password"/>
                            <input type="text" id="passwordConform" class="fadeIn third" name="login" placeholder="Confirm password"/>
                            
                            <input type="submit" class="fadeIn fourth" value="sign up"/>
                        </form>

                    </div>
                </div>
        )
    }
}

export default Signup