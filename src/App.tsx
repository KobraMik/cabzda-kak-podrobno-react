import React from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating} from './components/Accordion/Rating';
import {UncontrolledAccordion} from './components/Accordion/UncontrolledAccordion';


function App() {
    return (
        <div className="App">
            <UncontrolledAccordion titleValue="UncontrolledAccordion"/>
            <Accordion titleValue="Accordion" collapsed={true}/>
            <Accordion titleValue="Accordion" collapsed={false}/>
            <Rating value={5}/>
            <Rating value={2}/>
            <Rating value={3}/>
        </div>
    );
}

export default App;
