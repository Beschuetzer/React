import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div onClick={() => history.push(props.redirect)} className="ui dimmer modals visible active">
      <div onClick={(e) => e.stopPropagation()} className="ui standard modal visible active">
        {props.header}
        {props.content}
        {props.actions}
      </div>
    </div>
    ,
    document.querySelector('#modal')
  )
}

export default Modal;