import React from 'react';
import ReactDOM from 'react-dom';
import './popup.module.css';
import Example from 'components/Example';

const Popup = () => (
  <div styleName="container">
    <Example />
  </div>
);

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<Popup />, root);
