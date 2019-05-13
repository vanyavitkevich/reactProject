import React, {} from 'react';
import './style.scss';
import Anchor from '../Anchor';

function Navigation(props){
    const {classWrapper, articles} = props

    return (
        <nav className = {`${classWrapper}__nav nav`}>
            <ul className = {`${classWrapper}__ul ul`}>
                {articles.map((el) => <Anchor item = {el.item} link = {el.link} classWrapper = {classWrapper}></Anchor>)}
            </ul>
        </nav>
    )
}

export default Navigation