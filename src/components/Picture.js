import React from 'react';

<<<<<<< HEAD
import { Display } from '../styled_components'
=======
import {Display} from '../styled_components'
>>>>>>> dda84c5e72caf0ed43fabb18890f0ec2c9493e55

export default class Picture extends React.Component {
  componentWillMount () {
    this.props.FETCH();
  }

  render () {
    const renderImages = this.props.headlines.map((item, i) => {
      return (
        <figure className="image is-16by9">
          <Display
            className="w3-border w3-padding-4 w3-padding-tiny"
            src={item["urlToImage"]}
            key={i}
          />
        </figure>
      );
    })
    return (
      <div>
        {renderImages}
      </div>
    );
  }
}
