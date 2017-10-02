import React from 'react';
import ReactDOM from 'react-dom';
import './jenn-styles.min.css';
import registerServiceWorker from 'registerServiceWorker';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

// Containers
import NavbarInstance from 'Nav';
import Home from 'Home';

ReactDOM.render(<NavbarInstance />, document.getElementById('nav'));
ReactDOM.render(<Home />, document.getElementById('page'));
registerServiceWorker();
