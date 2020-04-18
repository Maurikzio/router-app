import React, {useState} from 'react'

import {BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams} from 'react-router-dom'

const contactos = [
    {firstName: 'Mauricio', gender: 'male'},
    {firstName: 'Manolo', gender: 'male'},
    {firstName: 'Fernando', gender: 'male'},
];

export default function CrazyRouter(){
    return(
        <Router>
            <Nav />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About} />
                <Route exact path="/contacts" component={Contacts} />
                {/* <Route path="/contacts/:username" component={() => <Contact data={contactos}/>} /> */}
                <Route path="/contacts/:username" component={Contact} />
            </Switch>
        </Router>
    )
}

function Nav(){
    return (
        <ul>
            <Link to='/'>
                <li>Home</li>
            </Link>
            <Link to='/about'>
                <li>About</li>
            </Link>
            <Link to='/contacts'>
                <li>Contacts</li>
            </Link>
        </ul>
    )
}

function Home(){
    return <h1>I am Home</h1>
}

function About(){
    return <h1>I am About</h1>
}

function Contacts(){
    const [contacts, setContacts] = useState(contactos);

    let { path, url } = useRouteMatch();
    return(
    <ul>
        <li>
            <Link to={`${url}/${contacts[0].firstName}`}>{contacts[0].firstName}</Link>
            <Link to={`${url}/${contacts[1].firstName}`}>{contacts[1].firstName}</Link>
        </li>
    </ul>
    )
}

function Contact({ match }){
    const { username } = useParams();
    return (
        <div>
            {/* <h1>Hello I am {match.params.username}</h1> */}
            {/* <p>{JSON.stringify(props.data, null, 2)}</p> */}
            <p>{JSON.stringify(match, null, 2)}</p>
        </div>
    )
}