import React from 'react';
import {Prompt} from 'react-router-dom';


export default class pageb extends React.Component {
    constructor(props){
        super(props);
        this.state={
            power:false
        }
        this.changePower = this.changePower.bind(this);
    }
    changePower(){
        alert('已开启');
        this.setState({
            power:true
        })
    }
    render() {
        return (
            <div>
                this is pageb
                <Prompt message='残忍离开' when={this.state.power} />
                <button onClick={this.changePower}>启用</button>
            </div>
            )
    }
}