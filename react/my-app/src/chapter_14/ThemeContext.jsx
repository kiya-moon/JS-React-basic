import React from "react";

// Context의 초기값을 별도로 설정하지 않음
// 이후 Provider에서 값을 설정할 예정
const ThemeContext = React.createContext();

// 개발자 도구에서 Context의 이름을 확인하기 위해 ThemeContext의 displayName 값 설정
ThemeContext.displayName = "themeContext";

export default ThemeContext;