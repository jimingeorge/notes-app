import React from "react";
import { connect } from "react-redux";
import { startPostNotes, startDeleteNotes } from "../../action/notes-action";
import Form from "./notes-form";
import { Link } from "react-router-dom";

function Notes(props) {
  
  const handleClick = formdata => {
    console.log(formdata);
    props.dispatch(startPostNotes(formdata));
  };
  
  const handleRemove = e => {
    const target = e.target.value;
    console.log(target);
    props.dispatch(startDeleteNotes(target));
  };
  return (
    <div className="container">
      <br/>
      <h2>Showing Notes-{props.notes.length}</h2>
      <br/>
      <div className='row'>
        <div className='col-md-5'>
          <Form submit={handleClick} />
        </div>
        <div className='col-md-1'></div>
        <div className='col-md-6'>
        {props.notes.length==0 ? 
          <div className="card" style={{width: '100%'}}>
          <div className="card-body">
            <h5 className="card-title text-center">No Notes to display</h5>
          </div>
        </div>
        :
        <div>
          {props.notes.map((ele, i) => {
            let a= ele.category.name
            console.log(props.category)
            console.log(a = ele.category.name)
            console.log('find',props.category.find(ele=>ele.name==a).name)
            return (
              <div key={i}>
                <div  className="card" style={{width: '100%'}}>
                
                
                <div className={`card-body text-center ${ele.color}`} >
                  <h5 className={`card-title ${ele.color}`}>{ele.title}</h5>
                  <p className="card-text">{ele.body}</p>
            <h3 className="text-center badge badge-pill badge-secondary">{ele.category ? ele.category.name : ''}</h3>
            <br/>
                  <button style={{margin:'auto 1%'}} href="#" className="btn btn-danger" onClick={handleRemove}
                  value={ele._id}>Remove</button>
                  <Link to={`/user/notes/edit/${ele._id}`}><button style={{margin:'1% auto'}} className="btn btn-light" value={ele._id}>Edit</button></Link>
                 
                </div>
          
              </div>
              <br/>
              </div>
              
            )
          })
          }</div>}
        </div>
        
      </div>
    </div>
  );
}
const stateMapToProps = state => {
  console.log(state);
  return {

    category:state.category,
    notes: state.notes
  };
};

export default connect(stateMapToProps)(Notes);
