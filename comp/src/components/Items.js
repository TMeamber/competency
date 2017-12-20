import React from 'react';

// COMP 42J 42K
export default function Items(props){
    return (
    <h1>{props.match.params.id}</h1>
    )
}