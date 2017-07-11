import React from 'react';

import Renderer from './Renderer';
<<<<<<< HEAD

import Loader from './Loading';

import { Button, Click } from '../styled_components';
=======
import Loader from './Loading';
import {Button, Click} from '../styled_components';
>>>>>>> dda84c5e72caf0ed43fabb18890f0ec2c9493e55

// High order component
let HOC = (Composition, source) => class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  componentWillMount () {
    this.props.collector(source);
  }

  handleClick (e) {
    this.setState({
      count: 0
    });
    this.props.check();
  }

  handleBack (e) {
    this.setState({
      count: 1
    });
    this.props.collector(source);
  }

  render () {
    return (
      <div>
        <Composition {...this.props}/>
        {
          this.props.status === 'DONE' ?
          <Renderer
            headlines={this.props.headlines}
          />
          :
          <Loader />
        }
        {
          this.props.status === 'DONE' ? (this.state.count === 1) ?
            <Click>
              <Button
                className="button is-danger is-focused"
                onClick={this.handleClick}
              >
              Load more
              </Button>
            </Click> : null : null
        }
        {
          this.props.status === 'DONE' ? (this.state.count === 0) ?
            <Click>
              <Button
                className="button is-warning is-focused"
                onClick={this.handleBack}
              >
              Back
              </Button>
            </Click> : null : null
        }
      </div>
    );
  }
}

export default HOC;
