import React from 'react';

const Spinner = (props) => {
  return (
    <div class='ui active dimmer'>
      <div class='ui big text loader'>{props.loadingMsg}</div>
    </div>
  );
};

Spinner.defaultProps = {
  loadingMsg: 'Loading...',
};

export default Spinner;
