import React from 'react';

const styles = { fontFamily: "Arapey" };

let NotFound = () => {
  return (
    <div>
      <img
        src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/caution-128.png"
        role="presentation"
      />
      <h3 style={styles}>Page not found !</h3>
    </div>
  );
}

export default NotFound;
