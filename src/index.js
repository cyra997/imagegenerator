import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

const App = () => {
  return (
    <div className="ui container">
      <h2>Refresh the page to generate new images</h2>
      <div className="image">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
      </div>
      <div className="image">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
      </div>
      <div className="image">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
      </div>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);