// 블로그에 처음 접속했을 때 보이는 페이지
// 글을 작성할 수 있는 버튼과 글 목록을 보여주어야 한다
// MainPage 컴포넌트의 코드는 그냥 만들어둔 컴포넌트들을 모아놓은 수준으로 단순함
// 이것이 컴포넌트 기반으로 개발하는 리액트의 장점이라고 할 수 있음
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PostList from "../list/PostList";
import Button from "../ui/Button";
import data from '../../data.json';
import { isHtmlElement } from "react-router-dom/dist/dom";

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

function MainPage(props) {
    const {} = props;

    const navigate = useNavigate();

    return(
        <Wrapper>
            <Container>
                <Button
                    title="글 작성하기"
                    onClick={() => {
                        navigate("/post-write");
                    }}
                />


                <PostList
                    posts={data}
                    onclickItem={(item) => {
                        navigate(`/post/${item.id}`);
                    }}
                />
            </Container>
        </Wrapper>
    );
}

export default MainPage;