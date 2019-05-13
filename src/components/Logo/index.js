import React, {} from 'react';
import './style.scss';

function Logo(props){
    const {logoTop, logoBottom} = props

    return (
        <div>
            <h2>{logoTop}</h2>
            <h3>{logoBottom}</h3>
        </div>
    )
}

export default Logo