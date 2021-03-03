import React from 'react';

const Comment = (props) => {
    console.log(props)
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img src={props.imgSrc} alt="avatar" />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
            </div>
            <div className="metaData">
                <span className="date">{props.date}</span>
            </div>
            <div className="text">{props.text}</div>
        </div>
    );
}

export default Comment;