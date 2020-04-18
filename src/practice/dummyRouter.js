import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './home';
import Posts from './posts';
import Gallery from './gallery';
import Contacts from './contacts';
import Contact1 from './contact1';


const DummyRouter = () => (
    <BrowserRouter>
        <Route exact path='/' component={Home}/>
        <Route path='/posts' component={Posts}/>
        <Route path='/gallery' component={Gallery}/>
        <Route exact path='/contacts/' component={Contacts}/>
        <Route path='/contacts/:id' component={Contact1}/>
    </BrowserRouter>
)

export default DummyRouter;