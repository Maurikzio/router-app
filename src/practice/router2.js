import React, { Component } from 'react';
import {
    BrowserRouter as Router, 
    Route,
    Link,
} from 'react-router-dom'

const routes = [
    {
        path: '/',
        exact: true,
        sidebar: () => <div>Home</div>,
        main: () => <h2>Home</h2>
    },
    {
        path: '/posts',
        exact: true,
        sidebar: () => <div>Posts</div>,
        main: () => <h2>Posts</h2>
    },
    {
        path: '/gallery',
        exact: true,
        sidebar: () => <div>Gallery</div>,
        main: () => <h2>Posts</h2>
    }
]

class Router2 extends Component {
    render(){
        return(
            <Router>
                <div>
                    <div>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/posts'>Posts</Link></li>
                            <li><Link to='/gallery'>Gallery</Link></li>
                        </ul>
                    </div>
                </div>
                <div>
                    {routes.map(route => (
                        <Route
                            key={route.path}
                            path={route.path}
                            exact={route.exact}
                            component={route.main}
                        />
                    ))}
                </div>
            </Router>
        )
    }
}

export default Router2;