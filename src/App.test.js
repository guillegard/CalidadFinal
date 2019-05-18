import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//af7f29d428bd41838ce3f4230ad01991

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
