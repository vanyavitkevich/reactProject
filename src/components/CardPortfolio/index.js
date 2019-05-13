import React, {} from 'react';
import './style.scss';

function CardPortfolio(props){
    const {properties, classWrapper} = props
    const {path, title, index, intro, type, statement} = properties
    return (
        <div id = {`card-${index}`} className = {classWrapper}>
            
        </div>
    )
}

export default CardPortfolio