import React from 'react';
import './style.scss';


export default function Modal(props){  
  const {
    classWrapper,
    clickHandler,
    heading, 
    intro, 
    inputs,
    onClick
  } = props;

  return( 
    <div className={`${classWrapper}__modal-wrapper modal-wrapper`}>
        <h2 className = {`${classWrapper}__modal-heading modal-heading`}>
          {heading}
        </h2>
        <p className = {`${classWrapper}__modal-intro modal-intro`}>
          {intro}
        </p>
        <form className={`${classWrapper}__form form`}>
          {inputs.map((el) => 
            <label className = {`${classWrapper}__label label`}>
              <input 
                className = {(el.name == "fromSubmit") ? `${classWrapper}__sub sub`:`${classWrapper}__input input`}
                {...el}
              />
            </label>
          )}
        </form>
        <button className = {`${classWrapper}__close-btn`} onClick = {onClick}>
          Закрыть
        </button>
    </div>
  )
}