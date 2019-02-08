import React from 'react'
import Authormsg from './authormsg';


export default class leftnav extends React.component{
    render(){
        return(
            <div>
                <Authormsg/>
                <hr/>
                <catalogue/>
                <catalogue/>
                <catalogue/>
            </div>
        )
    }
} 