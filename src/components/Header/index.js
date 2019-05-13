import React, {} from 'react';
import './style.scss';
import Navigation from '../Navigation';
import Logo from '../Logo';

function Header(props){
    const {classWrapper, 
           idName,
           heading, 
           price, 
           order, 
           content, 
           onClick, 
           logoTop,
           logoBottom} = props

    return (
        <div className = {classWrapper} id = {idName}>
            <div className = "container">
                <div className = {`${classWrapper}__head row`}>
                    <Logo logoTop = {logoTop} logoBottom = {logoBottom}>
                    </Logo>
                    <Navigation classWrapper = {classWrapper} articles = {content}></Navigation>
                </div>
                <div className = {`${classWrapper}__bottom row`}>
                    <h1 className = {`${classWrapper}__h1`}>
                        {heading}
                    </h1>
                    <p className = {`${classWrapper}__p`}>
                        {price}
                    </p>
                    <button className = {`${classWrapper}__button`} onClick = {onClick}>
                        {order}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header