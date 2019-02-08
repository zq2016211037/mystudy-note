import React from 'react';

export default class pagec extends React.Component {
    componentWillMount(){
        console.log(this.props);
    }
    render() {
        return (
            <div>this is pagec 参数：{this.props.match.params.param}  and{this.props.match.params.a}</div>
        )
    }
}