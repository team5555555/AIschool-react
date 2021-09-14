import React from 'react';
import loadable from '@loadable/component';

import { Switch, Route, Redirect } from 'react-router-dom';

// import Home from '@pages/Home/home'
const Home = loadable(() => import('@pages/Home/home'));



const App = () => {
    return (
        <Switch> 
            {/* <Redirect exact path = '/' to = '/home'/> */}
            <Route path='/' component={Home}/>
        </Switch>
        
    )
}

export default App