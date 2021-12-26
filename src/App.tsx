import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {OnOff} from './components/OnOff/OnOff';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import { UncontrolledOnOff } from './components/UncontrolledOnOff/UncontrolledOnOff';


function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(3)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)
    let [unSwitchOn, setUnSwitchOn] = useState<boolean>(false)
    return (
        <div className="App">
            <OnOff on={switchOn} onChange={(on)=>{setSwitchOn(on)}}/>
            <UncontrolledOnOff onChange={setUnSwitchOn}/> {unSwitchOn.toString()}
            {/*// с помощью пропс ончейндж получаем какой-то толко от неконтролируемой компоненты, теперь она даёт результат родителю*/}
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
            {/*<UncontrolledRating/>*/}
            <UncontrolledAccordion titleValue={"UncontrolledAccordion"}/>
            {/*<Accordion titleValue="Accordion"*/}
            {/*           collapsed={accordionCollapsed}*/}
            {/*           onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}}/>*/}
        </div>
    );
}

export default App;
