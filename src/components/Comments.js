import React from 'react';

function Comments({comments}) {

    const commentsList = comments.map(comment => {
        return (
            <li className="collection-item avatar" key={comment.id}>
                <i className="material-icons circle red">person</i>
                <p>{comment.comment}</p>
            </li>
        );
    });
    return commentsList.length ? (
        <ul className="collection">
            {commentsList}
        </ul>
    ) : (<div className="center"><p>No Comments yet! care to leave one? </p></div> );
}

export default Comments;