import React from 'react';

export default () => {
  const greeting = chrome.i18n.getMessage('greeting');

  return <div>{greeting}</div>;
};
