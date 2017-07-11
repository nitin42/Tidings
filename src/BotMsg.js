import React from 'react';

import {Message} from './styled_components';

const style = {
  fontSize: "20px"
};

let BotMsg = (props) => {
  return (
    <Message className="subtitle">
      {
        (props.show && props.botMsg !== '') ?
          <span style={style} className="tag is-danger is-medium">
            {props.botMsg}
          </span>
        :(props.show && props.botMsg === '') ?
          <span style={style} className="tag is-danger is-medium">
            I am not sure what you said.
          </span>
        :(props.initMsg) ?
        <span style={style} className="tag is-danger is-medium">
          {props.initMsg}
        </span>: null
      }
    </Message>
  );
}

export default BotMsg;
