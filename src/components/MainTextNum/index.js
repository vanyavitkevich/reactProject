import React from 'react';
import './style.scss';

export default function MainTextNum(props){  
    const {articles, classWrapper, colorMain, colorLi} = props


        return(        
            <div className={`${classWrapper}__mainNum`}>
                <ol className={`${classWrapper}__ol`}>
                    {articles.map((el) => 
                        <li className={`${classWrapper}__li`} style={{ color: colorLi }}>
                            <p className={`${classWrapper}__p-head`} style={{ color: colorMain }}>
                                {el.heading}
                            </p>
                            <p className={`${classWrapper}__p-bot`} style={{ color: colorMain }}>
                                {el.text}
                            </p>
                        </li>)
                    }
                </ol>
            </div> 
        )
    }