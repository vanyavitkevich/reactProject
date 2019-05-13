import React from 'react';
import './style.scss';

export default function HeadText(props){  
    const {title, classWrapper, colorHead} = props


        return(        
            <h2 className={`${classWrapper}__h2 h2`} style={{ color: colorHead }}>
                {title}
            </h2> 
        )
    }