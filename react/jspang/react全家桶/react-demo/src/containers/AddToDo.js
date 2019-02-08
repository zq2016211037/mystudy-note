import connect from 'react-redux';

let ADDToDo = ({dispatch})=>{
	return (<div>
		<form onSubmit={e =>{
				e.preventDefault();
				if (!input.value.trim()) {return;}
				dispatch(addTodo())
			}}>
			<input/>
			<button>add todo<button/>

		</form>


		</div>

		)
}