import React, {useState} from 'react';

type PropsType = {
    // on: boolean
}

export function OnOff(props: PropsType) {

    const [on, setOn] = useState(false);

    let onStyle = {
        width: "30px",
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "olivedrab" : "white"
    }
    let offStyle = {
        width: "30px",
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        marginLeft: "2px",
        backgroundColor: !on ? "firebrick" : "white",
    }
    const indicatorStyle = {
        width: "20px",
        height: "20px",
        borderRadius: "10px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "10px",
        backgroundColor: on ? "olivedrab" : "firebrick"
    }

    return (
        <div>
            <div style={onStyle}
                 onClick={() => {
                     setOn(true)
                 }}>On
            </div>
            <div style={offStyle}
                 onClick={() => {
                     setOn(false)
                 }}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )
}