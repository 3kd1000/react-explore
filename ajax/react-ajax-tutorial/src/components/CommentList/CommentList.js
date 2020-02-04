import React from 'react';
import './CommentList.css';
import {Comment} from '../';

const CommentList = ({comments}) => {

    const commentList = comments.map(
        (comment, index) => (
          <Comment
            name = {comment.email.split('@')[0]} //comment.name 으로도 가능하나, 이름이 너무 길어서 이메일의 골뱅이 앞까지로 변경
            body = {comment.body}
            key = {index}
          />
        )
    );

    return (
        <ul className="CommentList">
            {commentList}
        </ul>
    );
};


export default CommentList;