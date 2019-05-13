import React, {} from 'react';
import './style.scss';

function CardReview(props){
    const {properties, classWrapper} = props
    const {path, title, index, intro, type, statement} = properties
    return (
        <div id = {`review__card-${index}`} className = {classWrapper}>
            <div className = {`${classWrapper}__img`} id = {`${classWrapper}-${index}`}>

            </div>
            <div id = {`review__bot-${index}`}>
               <h2>{intro}</h2>
                <p>
                    <sup>"</sup>
                        {statement}
                    <sub>"</sub>
                </p>
            </div>
        </div>
    )
}

export default CardReview