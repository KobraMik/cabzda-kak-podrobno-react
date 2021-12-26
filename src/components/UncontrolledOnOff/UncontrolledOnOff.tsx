import React, {useState} from 'react';

type PropsType = {
    onChange: (on: boolean) => void
}

export function UncontrolledOnOff(props: PropsType) {

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

    const onClicked = () => {
            setOn(true)
            props.onChange(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div>
            <div>UnControlled OnOff</div>
            <div style={onStyle}
                 onClick={onClicked}>On</div>
            <div style={offStyle}
                 onClick={offClicked}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}