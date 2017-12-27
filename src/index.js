import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App, STORY, Text} from './App';
import {GAMETEXT} from './Directions';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App story={STORY} gameText={GAMETEXT}/>, document.getElementById('root'));
registerServiceWorker();
