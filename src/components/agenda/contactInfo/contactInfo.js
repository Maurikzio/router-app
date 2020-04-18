import React, { useState, useEffect } from 'react';
import { useParams, withRouter} from 'react-router-dom';

import './contact-info-styles.css'

function ContactInfo (props) {
    const [ contactInfo, setContactInfo ] = useState([]);
    const { username } = useParams()
    const { history } = props;

    useEffect(() => {
        const query = props.data.filter(contact => contact.firstName === username)
        setContactInfo(...query)
    }, [])

    return (
        <div className='contact-container'>
            <button onClick={() => history.goBack()}><spam>&#10094;</spam> Go back</button>
            <div className='personal-container'>
                <h2>Hello,</h2>
                <p>I am <b>{contactInfo.firstName}</b> {contactInfo.lastName}</p>
                <p>Phone: {contactInfo.phone}</p>
                <h3>About me: </h3>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
        </div>
    )
}

export default withRouter(ContactInfo);