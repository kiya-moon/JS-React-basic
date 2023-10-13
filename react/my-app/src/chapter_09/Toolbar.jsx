import React from "react";

const styles = {
    wrapper: {
        padding: 16,
        display: "flex",
        flexDirection: "row",
        borderBottom: "1px solid grey",
    },
    greeting: {
        marginRight: 8,
    },
};

// Toolbar 컴포넌트
function Toolbar(props) {
    const { isLoggedIn, onClickLogin, onClickLogout } = props;

    return (
        <div style={styles.wrapper}>
            {/* Inline If 조건부 렌더링 */}
            {isLoggedIn && <span style={StyleSheet.greeting}>환영합니다!</span>}

            {/* Inline If-Else 조건부 렌더링 */}
            {isLoggedIn 
                ? (<button onClick={onClickLogout}>로그아웃</button>) 
                : (<button onClick={onClickLogin}>로그인</button>)
            }
        </div>
    );
}

export default Toolbar;