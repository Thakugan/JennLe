import React, { Component } from 'react';
import Jupyter from 'react-jupyter';
import request from 'superagent';
import { Link } from 'react-router-dom';

import '../../styles/JupyterNotebook.css';

class JupyterNotebook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notebookJSON: null
    }
  }

  componentDidMount(){
    request.get(this.props.url, (err, res) => {
      this.setState({notebookJSON: JSON.parse(res.text)})
    })
  }

  render() {
    const { notebookJSON } = this.state;

    return(
      <div className='jupyter container'>
        <Link to={'/projects'} className='close'>
          <i className="material-icons">close</i>
        </Link>
        <br />
        { notebookJSON &&
          <Jupyter
            notebook={notebookJSON}
            defaultStyle
            showCode
          />
        }
      </div>
    );
  }
}

export default JupyterNotebook;
