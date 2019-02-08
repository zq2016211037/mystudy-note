// /*
//  * action 类型
//  */

// export const ADD_TODO = 'ADD_TODO';
// export const TOGGLE_TODO = 'TOGGLE_TODO'
// export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

// /*
//  * 其它的常量
//  */

// export const VisibilityFilters = {
//   SHOW_ALL: 'SHOW_ALL',
//   SHOW_COMPLETED: 'SHOW_COMPLETED',
//   SHOW_ACTIVE: 'SHOW_ACTIVE'
// }

// /*
//  * action 创建函数
//  */

// export function addTodo(text) {
//   return { type: ADD_TODO, text }
// }

// export function toggleTodo(index) {
//   return { type: TOGGLE_TODO, index }
// }

// export function setVisibilityFilter(filter) {
//   return { type: SET_VISIBILITY_FILTER, filter }
// }

let nextToDoId = 0;


//三种用户行为 
//添加
const addTodo = (text) =>{
	type:'ADD_TODO',
	text,
	id:nextToDoId
}

const VisibilityFilters = (filter) =>{
	type:'SET_VISIBILITY_FILTER',
	filter
}

const toggleTodo = (id) =>{
	type:"TOGGLE_TODO",
	id
}