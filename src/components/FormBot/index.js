import React, {} from 'react';
import './style.scss';

function FormBot(props){
    const {properties, classWrapper} = props

    return (
        <form className = {classWrapper}>
            {properties.map(el => 
                <label className = "map__form__bottomForm__lab">
                    <input 
                        className = {(el.name == "fromSubmit") ? "map__form__bottomForm__sub":"map__form__bottomForm__lab__inp"}
                        {...el}
                    />
                </label>
            )}
        </form>
    )
}

export default FormBot