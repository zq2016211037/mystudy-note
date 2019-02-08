// import { combineReducers } from 'redux'
// import {
//   ADD_TODO,
//   TOGGLE_TODO,
//   SET_VISIBILITY_FILTER,
//   VisibilityFilters
// } from './actions'
// const { SHOW_ALL } = VisibilityFilters

// function visibilityFilter(state = SHOW_ALL, action) {
//   switch (action.type) {
//     case SET_VISIBILITY_FILTER:
//       return action.filter
//     default:
//       return state
//   }
// }

// function todos(state = [], action) {
//   switch (action.type) {
//     case ADD_TODO:
//       return [
//         ...state,
//         {
//           text: action.text,
//           completed: false
//         }
//       ]
//     case TOGGLE_TODO:
//       return state.map((todo, index) => {
//         if (index === action.index) {
//           return Object.assign({}, todo, {
//             completed: !todo.completed
//           })
//         }
//         return todo
//       })
//     default:
//       return state
//   }
// }

// const todoApp = combineReducers({
//   visibilityFilter,
//   todos
// })

// export default todoApp


// reducer  是对响应的抽象  是纯方法 传入旧状态和action  返回新状态


const todo = (state,action) =>{
  switch (action.type){
    //添加代办项
    case 'ADD_TODO':
      return{
        id:action.id,
        text:action.text,
        completed:false
      }
    //toggle
    case 'TOGGLE_TODO':
      if(state.id != action.id){
        return state
      }else{
        return Object.assign({},state,{
          completed:!state.completed
        })
      }
      default:
        return state
  }
}

const todos = (state,action){
  switch (action.type){
    case 'ADD_TODO':

      return [
      ...state,
      todo(undefined,action)
      ]

    case 'TOGGLE_TODO':
      return state.map(t=>todo(t,action))

    default:
      return state
  }
}