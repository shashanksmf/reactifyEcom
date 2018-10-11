import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import graphic1 from './../../assets/images/graphic1.png';

class ForgetPassword extends Component {
    state ={
        email:'',
        ForgotPwdError:null,
        ForgotPwdResp:null,
     
      }
      validateEmail=()=>{
   
        var emailRegex='/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/';
        if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email)){
         
           return true;
        }
        else{
         return false      
        }
      
      }
       forgotpassword=()=>{
        var isValidEmail=false
        isValidEmail= this.validateEmail();
           console.log("Forgot request by==>",this.state.email);
         if(isValidEmail){
           fetch("http://inspiresofttech.com/on_demand/api/forgotpassword",
           {
             method: "POST",
             body: JSON.stringify({ email:this.state.email})
           })
        //    .then(resp => resp.json())
           .then(data => {
             try{

             } catch(e){

             } 
             if(data.code){
               var tempCode=data.code;
               
               if(tempCode==="Failure"){
                 this.setState({                 
                   ForgotPwdResp:data.message,
                   ForgotPwdError:true
                  })
               }
               else{
                   console.log("forget password==>");
                   
                 this.setState({
                   ForgotPwdResp:'set password',
                   ForgotPwdError:false
                  })
               }
             }
             console.log("api forgotpassword rsponse",data);
          
           },err=>{
             this.setState({
                ForgotPwdResp:err,
               ForgotPwdError:true
              })
             
            })
         }
         else{
           this.setState({          
             ForgotPwdErrorResp:'please try with Registered email id',
             ForgotPwdError:true
            })
         }
     
      
      }
        handleChange = (event) => {
            this.setState({
              [event.target.name]: event.target.value,
            })
          }

    
  render() {
 
 return(
  
    <div className="check">
      <div className="content">
       <div className="checkleft">
          <div className="phase1">
            <div className="pbody">
              <div className="phead" style={{ backgroundColor: '#FFFFFF' }}>
                <div className="col1">
                  <div className="login-head">Forgot Password</div>
                  <div className="login-text">Set your new password.</div>
                  <img src={graphic1} width="80%" className="graphic1" />
                </div>
                <div className="col2">  
                {this.state.ForgotPwdError == true ? <div  className='alert alert-warning '>
                   <strong>ForgetPassword  </strong>{this.state.ForgotPwdResp} 
                  </div>:null }          
                  <div  className= "login-box" ><input type="text" className="txtt" name="email" placeholder="Registered  Email ID " onChange={this.handleChange} /></div>
                    <br /><br /><br />

                    {this.state.ForgotPwdError == false ?  <div  className='login-box '>
                    <input type="password"  className="txtt" name="password" placeholder="New Password" onChange={this.handleChange} />
                    </div>:null }  
                    
                        {this.state.ForgotPwdError == false ?  <div  className='login-box '>
                        <input type="password"  className="txtt" name="password" placeholder="Confirm Password" onChange={this.handleChange} />
                    </div>:null } 
                    {this.state.ForgotPwdError == false ?  <button className= "butt1" onClick={this.forgotpassword}>Set Password</button> :null } 
                     
                    <button className= "butt1" onClick={this.forgotpassword}>Continue</button> 
                  <a><button className="butt2" onClick={() => this.props.history.push('signup')}>New to Edhik?Signup </button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      )
  }
}

  export default ForgetPassword;