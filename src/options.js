import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import Example from 'components/Example';
import defaultTheme from 'themes/default';

const OptionsPage = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Example />
    </ThemeProvider>
  );
};

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<OptionsPage />, root);
