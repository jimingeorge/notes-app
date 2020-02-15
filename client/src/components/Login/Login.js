import React from 'react'
import LoginForm from './Login-Form'
import Axios from 'axios'
import { Button, notification } from 'antd';



export default class Login extends React.Component{
    
    handleSubmit=(formData)=>{
        console.log(formData)
        Axios.post('http://localhost:3050/user/login',formData)
            .then(res=>{
                const data = res.data
                console.log(data)
                if(data.error){
                    alert(data.error)
                }else{
                    localStorage.setItem('authToken',data.token)
                    const openNotificationWithIcon = type => {
                        notification[type]({
                          message: 'Successfully Logged in'
                          
                        });
                      };
                    openNotificationWithIcon('success')
                    
                    this.props.history.push('/user/notes')
                    window.location.reload()
                    
                }
                
            }) 
            .catch(err=>alert(err))

    }
    render(){
        return (
            <div style={{textAlign:'center'}}>
                <div style={{display:'inlineBlock',width:'30%',margin: '0 auto'}}>
                    <h1>Login</h1>
                    <LoginForm submit={this.handleSubmit}/>
                </div>
            </div>
        )
    }
}

