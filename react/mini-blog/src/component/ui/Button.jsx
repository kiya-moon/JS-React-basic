// 버튼은 따로 컴포넌트를 만들 필요 없이 HTML에서 제공하는 버튼 태그를 사용해도 되지만,
// 버튼의 스타일을 변경하고 버튼에 들어갈 텍스트도 props로 받아 좀 더 쉽게 사용하고자 컴포넌트로 만든다
// 원한다면 부가적인 기능들을 추가할 수도 있다
import React from "react";
import styled from "styled-components";

// 버튼 태그에 스타일을 입힌 StyledButton 컴포넌트
const StyledButton = styled.button`
    padding: 8px 16px;
    font-size: 16px;
    border-width: 1px;
    border-radius: 8px;
    cursor: pointer;
`;

function Button(props) {
    const { title, onClick } = props;
    
    // Button 컴포넌트에서 props로 받은 타이틀이 버튼 목록에 표시되도록 함
    // props로 받은 onClick은 StyledButton에 onClick을 넣어줌으로써 클릭 이벤트를 상위 컴포넌트에서 받을 수 있도록 함
    return <StyledButton onClick={onClick}>{title || "buttton"}</StyledButton>;
}

export default Button;