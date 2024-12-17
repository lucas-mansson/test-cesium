import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import reportWebVitals from './reportWebVitals';
import { Ion, Viewer } from "cesium";

Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4OTE0YjE5ZS05YTU4LTQ4YjQtYjg1NS0zMzc1MWI0OGM3MzUiLCJpZCI6MjQ3NDE3LCJpYXQiOjE3Mjg2NTM1MzZ9.E0C5IqEoocHXKMLaELh_51R2RtL7lucZ2Q1ISkt6LKA';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
