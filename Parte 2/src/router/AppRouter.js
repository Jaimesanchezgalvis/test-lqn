import React from 'react'
import { Navbar } from '../ui/Navbar'
import {
    HashRouter  as Router,
    Switch,
    Route,
} from "react-router-dom";
import { Films } from '../components/films/Films';
import { People } from '../components/people/People';
import { Planets } from '../components/planets/Planets';
import { Species } from '../components/species/Species';
import { Startships } from '../components/startships/Startships';
import { Vehicles } from '../components/vehicles/Vehicles';
import { GetPeopleByName } from '../components/people/GetPeopleByName';

export const AppRouter = () => {
    return (
        <Router>
            <>
        <Navbar />
            <Switch>
                    <Route exact path="/films" component={Films} />
                    <Route exact path="/people" component={People} />
                    <Route exact path="/people/:id" component={GetPeopleByName} />
                    <Route exact path="/planets" component={Planets} />
                    <Route exact path="/species" component={Species} />
                    <Route exact path="/startships" component={Startships} />
                    <Route exact path="/vehicles" component={Vehicles} />
                    {/* <Redirect path="/" component={People} /> */}
            </Switch>
</>
            </Router>
    )
}
