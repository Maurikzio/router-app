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
                <Route exact path="/router-app/" component={Home}/>
                <Route path="/router-app/posts" component={Posts} />
                <Route path="/router-app/pictures" component={Pictures} />
                {/* component={() => <Contacts data={contacts}/>} */}
                <Route exact path="/router-app/contacts">
                    <Contacts data={contacts}/>
                </Route>
                <Route path="/router-app/contacts/:username" component={() => <ContactInfo data={contacts}/>} />
            </Switch>
        </Router>
    )
}



