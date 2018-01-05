import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App, STORY, Text} from './App';
import {GAMETEXT} from './FirstInstanceText';
import {GAMETEXTB} from './SecondInstanceText';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App story={STORY} gameText={GAMETEXT} gameTextB={GAMETEXTB}/>, document.getElementById('root'));
registerServiceWorker();
