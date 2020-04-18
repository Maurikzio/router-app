import React, { useState } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Nav from './nav/Nav';
import Home from './home/home';
import Posts from './posts/posts';
import Pictures from './pictures/pictures';
import Contacts from './agenda/contacts/Contacts';
import ContactInfo from './agenda/contactInfo/contactInfo';

export default function SuperRouter(props){
    const [contacts, setContacts] = useState(props.data);
    return(
        <Router>
            <Nav />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/posts" component={Posts} />
                <Route path="/pictures" component={Pictures} />
                {/* component={() => <Contacts data={contacts}/>} */}
                <Route exact path="/contacts">
                    <Contacts data={contacts}/>
                </Route>
                <Route path="/contacts/:username" component={() => <ContactInfo data={contacts}/>} />
            </Switch>
        </Router>
    )
}



