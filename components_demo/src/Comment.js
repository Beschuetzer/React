import React from 'react';

const Comment = () => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img src="https://source.unsplash.com/random" alt="avatar" />
            </a>
            <div className="content">
                <a href="/" className="author">
                    Sam
                </a>
            </div>
            <div className="metaData">
                <span className="date">Today at 6:00PM</span>
            </div>
            <div className="text">Nice Blog Post</div>
        </div>
    );
}

export default Comment;