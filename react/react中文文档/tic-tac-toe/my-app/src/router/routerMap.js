import React from 'react'
import {BrowserRouter,Route,Link} from 'react-router-dom' 

import App from '../App'
import Home from '../Home'
import Blog from '../Blog'

class RouterMap extends React.Component{
	updateHandle(){
		console.log('路由发生改变');
	}
	render(){
		return(
		<BrowserRouter >
		  <Route path="/" component={App}/>
		  <Route path="/Blog" component={Blog}/>
		  <Route path="/Home" component={Home}/>
		</BrowserRouter>
		);
	};
		
	

}

export default RouterMap