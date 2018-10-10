// @flow
import React, { Component } from 'react';
import logo from './../../logo.svg';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SignUpAction } from './../../actions/AuthActions';
import graphic1 from './../../assets/images/graphic1.png';
import axios from 'axios';
import './login.css'


class Login extends Component {
  state ={
    mobile:null,
    password:'',
    loginValid:false,
  }

  loginUser = () => {
    console.log("Login user data==>",this.state.password,this.state.mobile);
    var mobile=this.state.mobile;
    var password=this.state.password;
    if(mobile&&password ){
      if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.mobile)){
        console.log("isEamil login==>",mobile);
        
        
        fetch("http://inspiresofttech.com/on_demand/api/verify_login",
        {
          method: "POST",
          body: JSON.stringify({ email:mobile, password:password })
        })
        .then(resp => resp.json())
        .then(data => {
          console.log("api rsponse for verify login",data);
          if(data.code== "SUCCESS"){
            this.setState({
              loginValid: true
            })
            localStorage.setItem("user_id",data.response.user[0].id);
            
          }
        },err=>{console.log("error for verify login",err)})
      }
      else{
        fetch("http://inspiresofttech.com/on_demand/api/mobile_login",
        {
          method: "POST",
          body: JSON.stringify({ mobile:mobile, password:password })
        })
        .then(resp => resp.json())
        .then(data => {
          console.log("api mobile_login rsponse",data);
          if(data.code== "SUCCESS"){
            this.setState({
              loginValid: true
            })
            localStorage.setItem("user_id",data.response.user[0].id);
          }
        },err=>{console.log("mobile_login err",err)})
      }
    }
    
  
  }

  validateEmail=()=>{
   
    var emailRegex='/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/';
    if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.mobile)){
     
       return true;
    }
    else{
     return false      
    }
  
  }
  forgotpassword=()=>{
   var isValidEmail=false
   isValidEmail= this.validateEmail();
      console.log("Forgot email==>",this.state.mobile);
    
    if(isValidEmail){
      fetch("http://inspiresofttech.com/on_demand/api/forgotpassword",
      {
        method: "POST",
        body: JSON.stringify({ email:this.state.mobile})
      })
      .then(resp => resp.json())
      .then(data => {
        if(data.code){
          var tempCode=data.code;
          if(tempCode=="Failure"){
            alert("forget Password fail "+data.message)
          }
        }
        console.log("api forgotpassword rsponse",data);
     
      },err=>{console.log("forgotpassword err",err)})
    }

 
   }

  changePassword=()=>{
   var user_id=(localStorage.getItem('user_id'))?localStorage.getItem('user_id'):"5";
    console.log("userID==>",user_id);
    
   var old_password="12345";
   var new_password="123445";
   fetch("http://inspiresofttech.com/on_demand/api/changePassword",
   {
     method: "POST",
     body: JSON.stringify({ user_id:user_id, old_password:old_password,new_password:new_password})
   })
   .then(resp => resp.json())
   .then(data => {
     console.log("api changePassword rsponse",data);
     if(data.code== "SUCCESS"){
      console.log("Password changed sucessfully");
      
     }
   },err=>{console.log("changePassword err",err)})

  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div className="check">
      <div className="content">
       <div className="checkleft">
          <div className="phase1">
            <div className="pbody">
              <div className="phead" style={{ backgroundColor: '#FFFFFF' }}>
                <div className="col1">
                  <div className="login-head">Sign in</div>
                  <div className="login-text">Get access to your Orders, Wishlist and Recommendations.</div>
                  <img src={graphic1} width="80%" className="graphic1" />
                </div>
                <div className="col2">
                <div  className= "login-box" ><input type="text" className="txtt" name="mobile" placeholder="Enter  email /mobile No" onChange={this.handleChange} /></div>
                    <br /><br /><br /><br />
                     <div className= "login-box ">
                     <input type="password"  className="txtt" name="password" placeholder="Enter Password" onChange={this.handleChange} />
                      </div>
                      <div className="floatRight" onClick={this.changePassword}><a href="#">change Password?</a></div>

                     <div className="floatRight" onClick={this.forgotpassword}><a href="#">forgot Password?</a></div>
                    
                    <br /><br /><br /><br />
                    <button className= "butt1" onClick={this.loginUser}>Login</button> 

                  <a><button className="butt2" onClick={() => this.props.history.push('signup')}>New to Edhik?Signup </button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <button onClick={() => this.props.history.push('signup')}>Navigate to SignUp</button>
      // </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("login mapStateToProps", state);
  return {
    users: state
  };
}

function matchDispatchToProps(dispatch) {
  console.log("login dispatch", dispatch);
  return bindActionCreators({ SignUpAction }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Login);


// export default Login;
