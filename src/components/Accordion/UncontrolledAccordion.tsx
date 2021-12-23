import React from 'react';
import {useState} from "react";
import { AccordionBody } from './AccordionBody';

type AccordionPropsType = {
    titleValue: string;
}

export function UncontrolledAccordion (props: AccordionPropsType) {
    let[collapsed, setCollapsed] = useState(false);
    return (
        <div>
            <AccordionTitle title={props.titleValue} />
            <button onClick={ () => { setCollapsed(!collapsed) }}>Accordion</button>
            {!collapsed && <AccordionBody /> }
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string;
}

function AccordionTitle (props: AccordionTitlePropsType) {
    return (
        <h3>
            -- {props.title} --
        </h3>
    )
}