import React from "react";
import Comment from"./Comment";

// function CommentList(props) {
//     return (
//         <div>
//             <Comment name={"리액트"} comment={"안녕하세요, 리액트 입니다."}/>
//             <Comment name={"DOM"} comment={"안녕하세요, DOM 입니다."}/>
//         </div>
//     );
// }

// Comment 데이터를 별도의 객체로 분리하기
const comments = [
    {
        name: "리액트",
        comment: "안녕하세요, 리액트 입니다.",
    },
    {
        name: "DOM",
        comment: "안녕하세요, DOM 입니다.",
    },
    {
        name: "JS",
        comment: "안녕하세요, JS 입니다.",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;

