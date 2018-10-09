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
    loginValid:false
  }

  loginUser = () => {
    console.log("Login user data==>",this.state.password,this.state.mobile);
    var mobile=this.state.mobile;
    var password=this.state.password;

    var isEmailLogin=(mobile.indexOf('@') >=0? true:false)
    if(mobile&&password ){
      if(isEmailLogin){
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
            
          }
        },err=>{console.log("error for verify login",err)})
      }
      else{
        // JSON.stringify({ mobile:mobile, password:password })
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
          }
        },err=>{console.log("mobile_login err",err)})
      }
  
      // axios({
      //   method: 'post',
      //   url: 'http://inspiresofttech.com/on_demand/api/mobile_login',
      //   data: {
      //   mobile:mobile, 
      //   password:password
      //   }
      // })
      // .then(function(response) {
      //   console.log("response mobile login==>",response);
        
      // }).catch(function (error) {
      //     console.log("mobile login  error==>",error);
      //   });


      // axios.post('http://inspiresofttech.com/on_demand/api/mobile_login', {
      //   mobile:mobile, 
      //   password:password
      // })
      // .then(function (response) {
      //   console.log("mobile login Response==>",response);
      // })
      // .catch(function (error) {
      //   console.log("mobile login  error==>",error);
      // });
    }
    
  
  }

  
  forgotpassword=()=>{
   
    fetch("http://inspiresofttech.com/on_demand/api/forgotpassword",
    {
      method: "POST",
      body: JSON.stringify({ email:"a4coderss@gmail.com"})
    })
    .then(resp => resp.json())
    .then(data => {
      console.log("api forgotpassword rsponse",data);
      if(data.code== "SUCCESS"){
        this.setState({
          loginValid: true
        })
      }
    },err=>{console.log("forgotpassword err",err)})
 
   }

  changePassword=()=>{
   var user_id="5"
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
       this.setState({
         loginValid: true
       })
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
