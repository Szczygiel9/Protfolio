import React from 'react';
import './App.css';
import ItemList from "./components/ItemList";
import Header from "./components/Header";
import {HashRouter as Router, Route} from 'react-router-dom';
import About from "./components/About";
import projects from "./data/SampleProjects";

function App() {
    return (
        <Router basename={"/Portfolio/"}>
            <div className="App">
                <Header/>
                <div className='main-container'>
                    <Route exact path={"/"} component={About}/>
                    <Route path={"/projects"}
                           component={() => <ItemList projects={projects}/>}/>
                </div>
            </div>
        </Router>
    );
}

export default App;
