import React from 'react';
import ReactDOM from 'react-dom';
import ErrorHandler from './ErrorHandler';

it.skip('renders ErrorHandler without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ErrorHandler />, div);
  ReactDOM.unmountComponentAtNode(div);
})