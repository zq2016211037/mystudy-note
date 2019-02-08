import React,{Component} from 'react';
import Nav from './Nav';
import Blog from './Blog';
import './Home.css';
import {BrowserRouter,Route,Link,NavLink} from 'react-router-dom' 

// import routerMap from './router/routerMap'
class Home extends Component{
	render(){
		return (
		<BrowserRouter>
			<div className ='Home'>
				<header>
					<p>Zqian的个人网站</p>
					<p>Zqian's Personal Website</p>
				</header>
				<main className="content">
					<div className="category">
						<NavLink to='/'> >> 读书笔记</NavLink>
				   </div>	
				   	<div className="category"> 
				   		<NavLink to='/Blog'>>> 实战练习 </NavLink>
				   	</div>
					<div className="category"> 
						<NavLink to='/Nav'> >> 随笔</NavLink>
					</div>
				</main>

				<footer>
					<p> <a href="">Contact</a></p>
				</footer>
				<Route path='/' component={Home}></Route>
				<Route path='/Blog' component={Blog}></Route>
				<Route path='/nav' component={Nav}></Route>
			</div>
		</BrowserRouter>
		);
	}
}

export default Home;