import React from 'react';
import './App.css';
import Projects from "./components/Projects";
import Header from "./components/Header";
import {HashRouter as Router, Route} from 'react-router-dom';
import About from "./components/About";

function App() {
    return (
        <Router basename={"/Portfolio/"}>
            <div className="App">
                <Header/>
                <div className='main-container'>
                    <Route exact path={"/"} component={About}/>
                    <Route path={"/projects"}
                           component={() => <Projects />}/>
                </div>
            </div>
        </Router>
    );
}

export default App;
