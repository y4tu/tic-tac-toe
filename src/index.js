import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './state';

const renderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={store.dispatch({type: 'GET-STATE'})}
                dispatch={store.dispatch.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
};

renderEntireTree();
reportWebVitals();
store.dispatch({type: 'SUBSCRIBE', observer: renderEntireTree});
