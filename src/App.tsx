import React from 'react';
import './App.css';
import { Accordion } from './components/Accordion/Accordion';
import {UncontrolledAccordion} from './components/Accordion/UncontrolledAccordion';


function App() {
    return (
        <div className="App">
            <Accordion titleValue="Accordion"/>
            <UncontrolledAccordion titleValue="UncontrolledAccordion"/>
        </div>
    );
}

export default App;
