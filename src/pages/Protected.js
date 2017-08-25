import React from 'react';

export default props => {
  const { actions, profile } = props;
  return (
    <div>
      <p className="App-intro">
        <div>
          {profile.firstName}
        </div>
        <button onClick={actions.logout}>Logout</button>
      </p>
    </div>
  );
};
