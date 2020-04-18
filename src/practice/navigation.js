import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Nav = (props) => {
    const { history, location, match } = props;

    console.log(`Location: ${location}`);
    console.log(`match: ${match}`);

    return(
        <React.Fragment>
            <button onClick={() => history.push('/')}>
                go to home
            </button>
            <button onClick={() => history.goBack()}>
                go back
            </button>
            <ul>
                <li>
                    <Link to='/'>home</Link>
                </li>
                <li>
                    <Link to='/posts'>posts</Link>
                </li>
                <li>
                    <Link to='/gallery'>gallery</Link>
                </li>
                <li>
                    <Link to='/contacts'>contacts</Link>
                </li>
                <li>
                    <Link to='/contacts/contact1'>contact1</Link>
                </li>
            </ul>
        </React.Fragment>
    )
}

export default withRouter(Nav);