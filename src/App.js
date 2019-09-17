import React from 'react';
import './App.css';
import projects from "./data/SampleProjects";
import ItemList from "./components/ItemList";
import Header from "./components/Header";

function App() {
    return (
        <div className="App">
            <Header/>
            <ItemList projects={projects}/>
        </div>
    );
}

export default App;
