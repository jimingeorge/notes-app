import React from 'react'
import RegisterForm from './Form'
import axios from 'axios'

export default class Register extends React.Component {
    constructor(){
        super()
        
    }

    handleClick=(values)=>{
        const data={
            username:values.nickname,
            email:values.email,
            password:values.password
        }
        console.log(data)
        const body = data
        axios.post('http://localhost:3050/user/register',body)
            .then(res=>{
                const user = res.data
                console.log(user)
                if(typeof(user)=='string'){
                    alert(user)
                }else{
                    this.props.history.push('/user/login')
                }
            })
            .catch(err=>alert(err))
    }
    

    render() {
        console.log('render')
        return (
            
            <div>
                <h1>Register</h1>
                <RegisterForm submit={this.handleClick}/>
            </div>
        )
    }
}

