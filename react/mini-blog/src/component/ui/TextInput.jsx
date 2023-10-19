// 보통 사용자에게 입력받을 때 input 태그를 사용하지만
// 블로그에서는 여러 줄에 걸친 텍스트를 받아야 하기 때문에 textarea 태그 사용
import { prependOnceListener } from "process";
import React from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
    width: calc(100% - 32px);
    ${(props) => 
        props.height && 
        `
            height: ${props.height}px;
    `}
    padding: 16px;
    font-size: 16px;
    line-height: 20px;
`;

function TextInput(props) {
    // 높이 설정을 위한 height
    // 입력된 값을 표시하기 위한 value
    // 변경된 값을 상위 컴포넌트로 전달하기 위한 onChange
    const { height, value, onChange } = props;

    return <StyledTextarea height={height} value={value} onChange={onChange} />;
}

export default TextInput;