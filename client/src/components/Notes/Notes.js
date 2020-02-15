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
        
          {props.notes.map((ele, i) => {
            return (
              <div key={i}>
                <div  className="card" style={{width: '100%'}}>
                <div className="card-body text-center">
                  <h5 className="card-title">{ele.title}</h5>
                  <p className="card-text">{ele.body}</p>
                  <button style={{margin:'auto 1%'}} href="#" className="btn btn-danger" onClick={handleRemove}
                  value={ele._id}>Remove</button>
                  <Link to={`/user/notes/edit/${ele._id}`}><button style={{margin:'1% auto'}} className="btn btn-primary" value={ele._id}>Edit</button></Link>
                </div>
              </div>
              <br/>
              </div>
              
            );
          })}
        </div>
        
      </div>
    </div>
  );
}
const stateMapToProps = state => {
  console.log(state);
  return {
    notes: state.notes
  };
};

export default connect(stateMapToProps)(Notes);
