import React from "react";

export default class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            title:props.title?props.title:'',
            body:props.body?props.body:''
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData = {
            'title': this.state.title,
            'body' : this.state.body
        }
        this.props.submit(formData)
        
        
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render(){
        return (
        
            
            <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label for="exampleInputEmail1">Title :</label>
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Title" name='title' onChange={this.handleChange} value={this.state.title}/>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Body :</label>
              <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Body" name='body' onChange={this.handleChange} value={this.state.body}/>
            </div>
            
            <button type="submit" className="btn btn-primary" value='Add Note' onClick={this.handleSubmit}>Submit</button>
            </form>
        
        )
        
    }
}
