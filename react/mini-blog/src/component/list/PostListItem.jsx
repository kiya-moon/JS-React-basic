// 글의 제목만 표시해주면 되는 컴포넌트
// PostList에서 PostListItem을 사용하기 때문에 더 작은 컴포넌트인 PostListItem을 먼저 만든다.
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
    :hover {
        background: lightgrey;
    }
`;

const TitleText = styled.p`
    font-size: 20px;
    font=weight: 500;
`;

function PostListItem(props) {
    const { post, onClick } = props;

    // TitleText를 이용해서 props로 받은 post 객체에 들어있는 title 문자열을 표시해준다
    return (
        <Wrapper onClick={onClick}>
            <TitleText>{post.title}</TitleText>
        </Wrapper>
    );
}

export default PostListItem;