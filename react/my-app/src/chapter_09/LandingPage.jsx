import React, { useState } from "react";
import Toolbar from "./Toolbar";

// LadingPage 컴포넌트
function LandingPage(props) {
    // useState 훅을 사용해서 사용자의 로그인 여부를 자체적으로 관리
    // 그리고 이 값을 Toolbar 컴포넌트에 전달하여 로그인 여부에 따라 Toolbar에서 적절한 사용자 인터페이스가 표시되도록 함
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onClickLogin = () => {
        setIsLoggedIn(true);
    };

    const onClickLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <div>
            <Toolbar
                isLoggedIn={isLoggedIn}
                onClickLogin={onClickLogin}
                onClickLogout={onClickLogout}
            />
            <div style={{ padding: 16 }}>소플과 함께하는 리액트 공부!</div>
        </div>
    );
}

export default LandingPage;
