import React from 'react';
import { render } from 'react-dom';

import Header from './components/Header';
import Main from './components/Main';

const app = (
    <div>
      <Header id="1"/>
      <Main/>
    </div>
);

render(app, document.getElementById('app'));