import React from 'react'
import {Switch, Route} from 'react-router-dom'
import About from './About'
import Portfolio from './Portfolio'
import Resume from './Resume'
import Contacts from './Contacts'
import Home from './Home'


const Router = () => {
    return (
        <Switch>
            <Route path='/about' component={About}/>
            <Route path='/' component={Home} exact/>
            <Route path='/resume' component={Resume}/>
            <Route path='/portfolio' component={Portfolio}/>
            <Route path='/contacts' component={Contacts}/>
        </Switch>
    )
}

export default Router