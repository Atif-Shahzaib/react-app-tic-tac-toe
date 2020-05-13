import React from 'react';

function MySquare(props){
    return (
    <button className="square"
    onClick={props.onClick}>
        {props.value}
    </button>
    );
}
export default MySquare;