import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css'
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './store/store';
import {startGetNotes} from './action/notes-action'
// .babelrc or babel-loader option

const store = configureStore()
store.subscribe(()=>console.log(store.getState()))
if(localStorage.getItem('authToken')){
    store.dispatch(startGetNotes())
}
const ele = (
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(ele, document.getElementById('root'));
