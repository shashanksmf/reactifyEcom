// @flow
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { StrictMode } from "react";
import './signup.css'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SignUpAction, HideSignUpError } from './../../actions/AuthActions';
import './../../assets/scss/login/index.scss';
import graphic1 from './../../assets/images/graphic1.png';

class SignUp extends Component {

  state = {
    mobile: '',
    email:'',
    password: '',
    signupResponse: {
      code: null
    },
    isMobileValid:false,
    isOtpSent:false,
    isOtpErr:false,
    required:null
  }

  static getDerivedStateFromProps(newProps, prevState) {
    const { users: { auth: { signupResponse: { code: responseCode = null } } = {} } = {} } = newProps;
    if (responseCode !== prevState.signupResponse.code) {
      if (responseCode == "SUCCESS") {
        setTimeout(() => {
          newProps.HideSignUpError();
          newProps.history.push('login')
        }, 3000)
      }
      return {
        ...prevState, ...newProps.users.auth,
      }
    }
    return null;
  }

  submitSignup = () => {


if(this.state.mobile&&this.state.email&&this.state.password){
  this.props.SignUpAction({ ...this.state });

}
else{
  this.setState({
    required:false
  })

}
    this.props.HideSignUpError();

  }
  validateMobileNo=()=>{
    this.setState({
      isOtpSent: true
    })
    this.sendOTP();
  }
 sendOTP=()=>{
  
   var mobile=this.state.mobile;
   mobile='+91'+mobile;
   console.log("OTP Send==>",mobile);
   
  function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         
      }
    };
    var myurl = new URL("http://control.msg91.com/api/sendotp.php");
    myurl.searchParams.set('authkey', '241793ATRBFnmO3h5bbb581a');
    myurl.searchParams.set('message', 'Your verification code is ##OTP##');
    myurl.searchParams.set('sender', 'OTPABC');
    myurl.searchParams.set('mobile', mobile);
    xhttp.open("POST", myurl.href, true);
    xhttp.withCredentials = true;
    xhttp.send();
  }
  loadDoc();  
 }
 
 verifyOTP=(event)=>{
  
        this.setState({
          isMobileValid: true
        })
   var mobile=this.state.mobile;
   var otp=event.target.value;
   console.log("verify OTP");
   
   mobile='+91'+mobile;
  function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      console.log(this.responseText);
      if (this.readyState == 4 && this.status == 200) {
        // var obj = JSON.parse()
        // this.setState({
        //   isOtpErr: true
        // })
        

      }
    };
    var myurl = new URL("https://control.msg91.com/api/verifyRequestOTP.php");
    myurl.searchParams.set('authkey', '241793ATRBFnmO3h5bbb581a');
    myurl.searchParams.set('otp', otp);
    myurl.searchParams.set('mobile', mobile);
    xhttp.open("POST", myurl.href, true);
    xhttp.withCredentials = true;
    xhttp.send();
  }
  loadDoc();  
 }
 
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  render() {
    const { code: signUpResponseCode = "", response: { message = "" } = {} } = this.state.signupResponse;
    return (
      <div className="check">
        <div className="content">
         <div className="checkleft">
            <div className="phase1">
              <div className="pbody">
                <div className="phead" style={{ backgroundColor: '#FFFFFF' }}>
                  <div className="col1">
                    <div className="login-head">Sigup</div>
                    <div className="login-text">We do not share your personal details with anyone.</div>
                    <img src={graphic1} width="80%" className="graphic1" />
                  </div>
                  <div className="col2">
                  
                  {this.state.required==false? <div className="alert alert-warning">
                      <strong>SignUp</strong> {"All fields are required"}
                    </div> : null}
                    {signUpResponseCode == "ERROR" ? <div className="alert alert-warning">
                      <strong>SignUp</strong> {message}
                    </div> : null}
                    {signUpResponseCode == "SUCCESS" ? <div className="alert alert-success">
                      <strong>SignUp</strong> {message} Please Login
                    </div> : null}
                    <div className="login-box"><input type="number" className="txtt" name="mobile" value={this.state.mobile} placeholder="Your Mobile Number" onChange={this.handleChange} /></div>
                    <br /><br /><br />
                    {this.state.isOtpSent ? null :<button id="btnSignUp"  className="butt1" onClick={this.validateMobileNo}>Continue</button> }
                    {this.state.isOtpSent ?<div><label>OTP Sent to Mobile</label> <span  className="floatRight" onClick={this.resendOTP}><a className="textDecorationNone" href="#">Resend?</a></span></div>: null}
                     {/* CODE FOR INPUT FIELD */}

                    {/*{this.state.isOtpSent==true ?<div className= "login-box" ><input type="number" className="txtt" name="otp" placeholder="Enter OTP sent to mobile" onChange={this.verifyOTP} /></div>: null} 
                     {this.state.isOtpSent ?<div  className= "login-box"><input type="email" className="txtt" name="email" placeholder="Your Email ID" onChange={this.handleChange} /></div>: null}   
                    {this.state.isOtpSent ?<div  className= "login-box"><input type="password"  className="txtt" name="password" placeholder="Create New Password" onChange={this.handleChange} /></div>: null}
                     */}
                    <div  className= {('login-box ' +(this.state.isOtpSent? '':'hidden') )} ><input type="number" className="txtt" name="otp" required placeholder="Enter OTP sent to mobile" onChange={this.verifyOTP} /></div>
                    <br /><br /><br /><br />
                    <div className={('login-box ' +(this.state.isOtpSent? '':'hidden')) }><input type="email" className="txtt" name="email" ref placeholder="Your Email ID" onChange={this.handleChange} /></div>
                    <br /><br /><br />
                     <div className= {('login-box ' +(this.state.isOtpSent? '':'hidden')) }><input type="password"  className="txtt" required name="password" placeholder="Create New Password" onChange={this.handleChange} /></div>
                    <br /><br /><br /><br />
                   
                    {/* <button className="butt1" onClick={this.submitLogin}>Submit</button> */}
                    {/* <button className= {('butt1 ' +(this.state.isOtpSent? '':'hidden')) } onClick={this.verifyOTP}>Verify</button>  */}
                     
                    {this.state.isOtpSent ? <button id="btnSignUp"  className="butt1" onClick={this.submitSignup}>SignUp</button> : null}
                    <a><button className="butt2" onClick={() => this.props.history.push('login')}>Existing User? Log in </button></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    users: state
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ SignUpAction, HideSignUpError }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(SignUp);
