import React from 'react';
import './style.scss';

export default function Anchor(props){  
    const {item, link, classWrapper} = props


        return(        
            <li className={`${classWrapper}__link link`}>
                <a href={link} className={`${classWrapper}__anchor anchor`}>
                   {item}
                </a>
            </li> 
        )
    }