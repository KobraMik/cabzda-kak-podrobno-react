import React, {useState} from 'react';

type RatingType = {
    //value: 0 | 1 | 2 | 3 | 4 | 5
}


export function UncontrolledRating(props: RatingType) {

    let [value, setValue] = useState(1)

    return (
        <div>
            <div>UncontrolledRating</div>
            <Star selected={value > 0} setValueProps={setValue} value={1}/>
            <Star selected={value > 1} setValueProps={setValue} value={2}/>
            <Star selected={value > 2} setValueProps={setValue} value={3}/>
            <Star selected={value > 3} setValueProps={setValue} value={4}/>
            <Star selected={value > 4} setValueProps={setValue} value={5}/>
        </div>
    )
}

type StarType = {
    selected: boolean
    value: 1 | 2 | 3 | 4 | 5
    setValueProps: (value: 1 | 2 | 3 | 4 | 5) => void
}

function Star(props: StarType) {
    return <span onClick={()=>{props.setValueProps(props.value)}}> {props.selected ? <b>star </b> : "star "}</span>
}

