import React from 'react';

import {Header} from './styled_components';

const style = {
  width: "480px",
  height: "32px",
  fontSize: "19px",
  fontFamily: "Josefin Sans",
  borderRadius: "2px",
  backgroundColor: "#ffffff",
  boxShadow: "0 1.5px 2px 0 rgba(0, 0, 0, 0.5)",
  border: "solid 0.9px #ebe5e5",
  padding: "20px"
};

export default class Head extends React.Component {
  constructor (props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput (event) {
    (event.key === 'Enter' && this.refs.term.value !== "") ?
      this.props.actions(this.refs.term.value) : null
  }

  componentDidMount() {
    let node = this.refs.term;
    node.focus();
  }

  render () {
    return (
      <Header>
        <input
          placeholder="Type 'recent news'" ref="term"
          style={style}
          onKeyPress={this.handleInput}
        />
      </Header>
    );
  }
}
