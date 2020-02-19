import React from "react";
import {connect} from 'react-redux'

class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            title:props.title?props.title:'',
            body:props.body?props.body:'',
            category:props.category?props.category:'',
            color:''
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData = {
            'title': this.state.title,
            'body' : this.state.body,
            'category':this.props.category.find(ele=>ele._id===this.state.category),
            'color':this.state.color
        }
        this.props.submit(formData)
        console.log('formdata',formData)
        
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
        console.log([e.target.name],e.target.value,this.state)
        
    }
    render(){
        return (
        
            
            <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Title :</label>
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Title" name='title' onChange={this.handleChange} value={this.state.title}/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Body :</label>
              <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Body" name='body' onChange={this.handleChange} value={this.state.body}/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">Category</label>
                <select className="form-control" id="exampleFormControlSelect1" onChange={this.handleChange} name='category'>
                <option>Select</option>
                {this.props.category.map(ele=>{
                    return <option key={ele._id}  value={ele._id} >{ele.name}</option>
                })}
                
                </select>
                
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">Color</label>                
                <select className="form-control" id="exampleFormControlSelect1" onChange={this.handleChange} name='color'>
                <option>Select</option>
                <option value='bg-primary text-white'>Navy Blue</option>
                <option value='bg-success text-white'>Light Green</option>
                <option value='bg-info text-white'>Moderate cyan</option>
                <option value='bg-dark text-white'>Midnight Black</option>
                
                </select>
            </div>
            
            
            <button type="submit" className="btn btn-primary" value='Add Note' onClick={this.handleSubmit}>Submit</button>
            </form>
        
        )
        
    }
}

const mapStateToProps=(state)=>{
    return({
        category:state.category
    })
}
export default  connect(mapStateToProps)(Form)