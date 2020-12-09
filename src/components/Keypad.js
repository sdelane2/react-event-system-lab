// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {

    passwordInput = () => {
        console.log("Entering password...")
    }

    render() { 
        return (
            <div>
            <input type="password" onKeyUp={this.passwordInput}/>
            </div>
        )
    }
}

export default Keypad;