import React from 'react'
import {Route, Switch} from 'react-router-dom';
import Contact from './Contact'
import About from './About'

function App() {
    return (
        <div>
        <Switch>

        <Route exact path='/about' component={About}/>
        <Route  exact path='/contact' component={Contact}/>

        
        
        
        </Switch>
       

        </div>
    )
}

export default App
