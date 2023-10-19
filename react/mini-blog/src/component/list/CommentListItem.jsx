// style만 조금 다를 뿐 postListItem 컴포넌트와 거의 동일
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: calc(100% - 32px);
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: 1px solid grey;
    border-radius: 8px;
    cursor: pointer;
    background: white;
    :hober {
        background: lightgrrey;
    }
`;

const ContentText = styled.p`
    font-size: 14px;
`;

function CommentListItem(props) {
    // props로 comment 객체 하나만 사용
    // comment 객체에는 사용자가 작성한 댓글 내용이 들어 있음
    const { comment } = props;

    // 댓글을 ContentText 컴포넌트를 통해 화면에 표시
    // 글은 클릭이 가능했지만 댓글은 별도로 클릭하는 기능이 없기 때문에 onClick 이벤트를 따로 처리해주지 않아도 된다
    return (
        <Wrapper>
            <ContentText>{comment.content}</ContentText>
        </Wrapper>
    );
}

export default CommentListItem;