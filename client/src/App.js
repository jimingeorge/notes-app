import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Notes from './components/Notes/Notes';
import NotesEdit from './components/Notes/notes-edit';
import Navbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import Category from './components/Category';
//import Login from './components/Logout'

function App() {
  return (
    <BrowserRouter>
      <div className='container-fluid' style={{width:'100%'}}>
        <Navbar/>    
        <Switch>
          <Route path='/' component={Home} exact={true}/>
          <Route path='/user/register' component={Register} />
          <Route path='/user/login' component={Login} />
          <Route path='/user/notes' component={Notes} exact={true}/>
          <Route path='/user/category' component={Category} exact={true}/>
          <Route path='/user/notes/edit/:id' component={NotesEdit} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
