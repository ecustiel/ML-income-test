import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import {SearchScreen} from '../components/search/SearchScreen';
import {ResultsScreen} from '../components/results/ResultsScreen';
import {DetailsScreen} from '../components/details/DetailsScreen';


export const AppRouter = () => {
    return (
        
        <Router>
                <Route  path='/' component={ SearchScreen } /> 
            <Switch>
                <Route exact  path='/items' component={ ResultsScreen } />
                <Route exact path='/items/:id' component={ DetailsScreen } /> 
                 <Redirect to='/' /> 
            </Switch>
        
        </Router>
    )
}