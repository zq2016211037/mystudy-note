import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,HashRouter,MemoryRouter,Route,Switch,Redirect} from 'react-router-dom';
import Pagea from './component/pagea';
import Pageb from './component/pageb';
import Pagec from './component/pagec';
import Nav from './component/nav';
import Error from './component/error';

import Leftnav from './component/Author/leftnav';

ReactDOM.render(
    <Router basename='demo'>
        <div>
            <Nav/>
            <Switch>
            <Route exact path='/' component={Pagea}/>
            <Route  path='/pageb' component={Pageb}/>
            <Route  path='/pagec/:param/:a' component={Pagec}/>
            <Redirect from='/redirect' to='/pageb'/>
            <Route component={Error}/>
            </Switch>
        </div>
    </Router>,
     document.getElementById('leftNav')
)