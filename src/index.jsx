import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import App from './components/App';
import store from './store';
import globalTheme from './styles/theme';

const GlobalStyle = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.background};
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: ${({ theme }) => theme.fontSizes.body};
    text-align: center;
  }
`;

ReactDOM.render(
  <ThemeProvider theme={globalTheme}>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root'),
);
