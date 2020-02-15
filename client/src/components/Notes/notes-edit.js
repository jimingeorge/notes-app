import React from 'react'
import Form from './notes-form'
import { connect } from 'react-redux'
import { startEditNotes } from '../../action/notes-action'

class NotesEdit extends React.Component {
    constructor(props){
        super(props)
    }
    handleSubmit=(data)=>{
        const id = this.props.match.params.id
        console.log(data)
        console.log(this.props)
        this.props.dispatch(startEditNotes(id,data))
        window.location.href='/user/notes'
    }
    render(){
        
        return (
            <div>
                <br/>
                <h2 className='text-center'>Edit</h2>
                <hr style={{width:'60%'}}/>
                <div style={{width:'60%',margin:'auto 20%'}}>
                    <Form  {...this.props.note} submit={this.handleSubmit}/>
                </div>
                
            </div>
        )
    }
}

const stateMapToProps = (state,props)=>{
   console.log(state)
    return({
        note:state.notes.find(note=>note._id==props.match.params.id)
    })
}

export default connect(stateMapToProps)(NotesEdit)