import React from 'react';
import './App.css';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Game3 from './components/Game-3/Game-3';
import Game4 from './components/Game-4/Game-4';
import Game5 from './components/Game-5/Game-5';

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Route path='/main' render={() =>
                    <Main
                        Main={props.state.Main}
                        dispatch={props.dispatch}
                    />}
                />
                <Route path='/3x3' render={() =>
                    <Game3 Page3={props.state.Page3}/>}
                />
                <Route path='/4x4' render={() =>
                    <Game4 Page4={props.state.Page4}/>}
                />
                <Route path='/5x5' render={() =>
                    <Game5 Page5={props.state.Page5}/>}
                />
                <Redirect from='/' to='/main'/>
            </div>
        </BrowserRouter>
    );
};

export default App;