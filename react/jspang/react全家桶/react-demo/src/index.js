import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import reducer from './reducers/counter';

const store = createStore(reducer);

//监听事件 注册监听器store.subsribe()  store.getState获取值 
// store.subscribe(()=>console.log('state update!',store.getState()))

//action触发 通过dispatch
// store.dispatch({
// 	type:'INCREMENT'
// })
// store.dispatch({
// 	type:'INCREMENT'
// })
const render = () =>{
	ReactDOM.render(<App onIncrement={()=>{store.dispatch({type:'INCREMENT'})}}  onDecrement={()=>{store.dispatch({type:'DECREMENT'})}} value={store.getState()}/>,
		 document.getElementById('root'));
}
render();
store.subscribe(render);
registerServiceWorker();
