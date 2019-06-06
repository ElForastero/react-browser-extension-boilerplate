import React from 'react';
import ReactDOM from 'react-dom';
import './options.module.css';
import Example from 'components/Example';

const OptionsPage = () => (
  <div styleName="container">
    <Example />
  </div>
);

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<OptionsPage />, root);
