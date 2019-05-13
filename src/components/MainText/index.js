import React from 'react';
import './style.scss';

export default function MainText(props){  
    const {articles, classWrapper, colorMain} = props


        return(        
            <div className={`${classWrapper}__main`}>
                {articles.map((el) => 
                    <p className={`${classWrapper}__p`} style={{ color: colorMain }}>
                        {el.text}
                    </p>)
                }
            </div> 
        )
    }