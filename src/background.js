import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './background.module.css';
import browser from 'webextension-polyfill';

const BackgroundApp = () => {
  const [css, updateCSS] = useState('');

  useEffect(() => {
    const url = browser.extension.getURL('assets/css/background.css');
    fetch(url)
      .then(response => response.text())
      .then(updateCSS);
  }, []);

  return (
    <div styleName="container">
      <style>{css}</style>
    </div>
  );
};

const root = document.createElement('div');
document.body.appendChild(root);
const shadow = root.attachShadow({ mode: 'open' });

ReactDOM.render(<BackgroundApp />, shadow);
