import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from 'registerServiceWorker';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

// Containers
import App from 'App';
import NavbarInstance from 'Nav';

ReactDOM.render(<NavbarInstance />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
