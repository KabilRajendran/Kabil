import React, { Component } from 'react'

class Loginpage extends Component {

    clickHandler(){
        window.location.href="./FirstPage"
    }

    render() {
        return (
            <div>
                <div id="formContent">
                    <h1>You are Logged in!</h1>
                    <input type="button" onClick={this.clickHandler} class="fadeIn first" value="Log Out"/>
                </div>
            </div>
        )
    }
}

export default Loginpage