import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowseRouter,Route,Link} from 'react-router-dom' 
// 引入组件
import registerServiceWorker from './registerServiceWorker';
import Home from './Home';
import App from './App';


ReactDOM.render(<Home />,document.getElementById('root'));

registerServiceWorker();
