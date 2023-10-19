import React from "react";
import styled from "styled-components";
import PostListItem from "./PostListitem";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

// PostList 컴포넌트의 props로 받은 Posts라는 배열에는 Post 객체들이 들어있다
// 이 Posts 배열에 map() 함수를 이용하여 각 Post 객체에 대해 PostListItem 컴포넌트를 만들어 렌더링하게 됨 
function PostList(props) {
    const { posts, onClickItem } = props;

    return (
        <Wrapper>
            {posts.map((post, index) => {
                return (
                    <PostListItem
                        key={post.id}
                        post={post}
                        onClick={() => {
                            onClickItem(post);
                        }}
                    />
                );
            })}
        </Wrapper>
    );
}

export default PostList;