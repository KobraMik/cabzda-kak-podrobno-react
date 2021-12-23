import React from 'react';

type PropsType = {
    on: boolean
}

export function OnOff (props: PropsType) {

    let onStyle = {
        width: "30px",
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.on ? "olivedrab" : "white"
    }
    let offStyle = {
        width: "30px",
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        marginLeft: "2px",
        backgroundColor: !props.on ? "firebrick" : "white",
    }
    const indicatorStyle = {
        width: "20px",
        height: "20px",
        borderRadius: "10px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "10px",
        backgroundColor: props.on ? "olivedrab" : "white"
    }

    return(
        <div>
            <div style={onStyle}>On</div>
            <div style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}