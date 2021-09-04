import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CommentBox from './App';
import reportWebVitals from './reportWebVitals';
const commentList = document.getElementById("root")
ReactDOM.render(
 <CommentBox />,
 commentList
);
export default CommentBox;
reportWebVitals();