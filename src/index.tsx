import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App/App';
import reportWebVitals from './reportWebVitals';
import {createTheme, CssBaseline, GlobalStyles, ThemeProvider} from "@mui/material";

const theme = createTheme({});


const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          ':root': {
            '--mui-color-primary': theme.palette.primary.main,
            '--mui-color-secondary': theme.palette.secondary.main,
            '--mui-color-warning': theme.palette.warning.main,
          },
        }}
      />
      <App />
    </ThemeProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
