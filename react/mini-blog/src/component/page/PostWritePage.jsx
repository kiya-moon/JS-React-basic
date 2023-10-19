// MainPage와 마찬가지로 만들어둔 컴포넌트들을 조림해서 만듦
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";

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

function PostWritePage(props) {
    const navigate = useNavigate();

    // 두 개의 state를 갖고 있음
    // 글의 제목을 위한 state
    const [title, setTitle] = useState("");
    // 글의 내용을 위한 state
    const [content, setContent] = useState("");

    return (
        <Wrapper>
            <Container>
                {/* 실제 화면에 나타나는 부분은 TextInput 컴포넌트를 사용해서 제목과 내용을 각각 입력받을 수 있도록 구성 */}
                <TextInput
                    height={20}
                    value={title}
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                />

                <TextInput
                    height={480}
                    value={content}
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                />

                {/* 화면 제일 하단에는 Button 컴포넌트를 사용해서 글 작성 버튼을 넣음 */}
                <Button
                    title="글 작성하기"
                    onClick={() => {
                        navigate("/");
                    }}
                />
            </Container>
        </Wrapper>
    );
}

export default PostWritePage;