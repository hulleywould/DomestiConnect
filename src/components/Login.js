import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
//import {Link} from 'react-router-dom';
import '../App.css';

class Login extends Component {

    constructor(props){
        super(props);
        
        this.state={
            username:'',
            password:''
        }
    }

    handleClick(e) {
        console.log("DEBUG: username is " + this.state.username);
        console.log("DEBUG: password is " + this.state.password);

        let username = this.state.username.trim();
        let password = this.state.password.trim();

        if (username !== "hello" && password !== "world")
            alert("wrong password or username");
        else
            this.props.history.push('/home');
            
        e.preventDefault();
    }

    render() {
        const style = {
            marginLeft: 50,
        };

        const paperStyle = {
            display: 'flex',
            flexDirection: 'column',
            margin: '50 50 50 50',
        };

        

    return (
        <div className="loginContainer" >
            <div className="loginLogo">
                <img src="DCtext.png" alt="logo" style={{height: '30'}}/>
            </div>
            <Paper zDepth={1} style={paperStyle}>
                <div className="loginText">
                    <h4>LOGIN</h4>
                </div>
                <TextField
                    hintText="minimum 2 characters"
                    errorText="This field is required"
                    style={style}
                    underlineShow={false}
                    floatingLabelText="Username"
                    onChange = {(event,newValue) => this.setState({username:newValue})}
                />
                <Divider />
                <TextField
                    hintText="minimum 6 characters"
                    errorText="This field is required"
                    type="password"
                    style={style}
                    underlineShow={false}
                    floatingLabelText="Password"
                    onChange = {(event,newValue) => this.setState({password:newValue})}
                />
                <br />
                <Divider />
                <div style={{textAlign: 'right'}}>
                    <p style={{paddingRight: '10', marginTop: '10'}}>forgot password</p>
                </div>
                <RaisedButton
                    label="Submit"
                    style={{width: 20, margin: '40px auto'}}
                    fullWidth={false}
                    onClick={(event) => this.handleClick(event)}
                />

            </Paper>
           
        </div>
    );
  }
}

export default Login;