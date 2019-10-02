import React from 'react';
import './App.css';
import ItemList from "./components/ItemList";
import Header from "./components/Header";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import About from "./components/About";
import projects from "./data/SampleProjects";

function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <div className='main-container'>
                    <Route exact path={process.env.PUBLIC_URL + "/"} component={About}/>
                    <Route path={process.env.PUBLIC_URL + "/projects"}
                           component={() => <ItemList projects={projects}/>}/>
                </div>
            </div>
        </Router>
    );
}

export default App;
