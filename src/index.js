import React from 'react'
import ReactDOM from 'react-dom'
import './jenn-styles.css'
import registerServiceWorker from './registerServiceWorker'

// Containers
import App from './containers/App'

ReactDOM.render(<App />, document.getElementById('app'));
registerServiceWorker();
