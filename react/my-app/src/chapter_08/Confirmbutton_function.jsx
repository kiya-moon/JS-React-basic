import React, { useState } from "react";

function ConfirmButton_function(props) {
    // useState 훅 사용
    const [isConfirmed, setIsConfirmed] = useState(false);

    // 이벤트 핸들러 사용
    const handleConfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    };

    return (
        <button onClick={handleConfirm} disabled={isConfirmed}>
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    );
}

export default ConfirmButton_function;