import React, { useState, useEffect } from "react";
import useCounter from "./useCounter";

// useCounter 훅을 사용하여 카운트를 관리하는 컴포넌트

// 최대 카운트 개수는 상수로 정의
// 카운트 개수가 최대 용량을 초과하면 경고 문구가 표시되며 더 이상 입장이 불가능해지도록 아래 코딩
const MAX_CAPACITY = 10;

function Accommodate(props) {
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);

    // useEffect 훅의 작동 방식을 확인하기 위해 일부러 두 개의 useEffect 사용
    // 첫 번째 useEffect는 의존성배열이 없는 형태, 두 번째 useEffect는 count가 의존성배열로 주어진 형태

    // 컴포넌트가 마운트된 직후에 호출되며 이후 컴포넌트가 업데이트 될 때마다 호출됨
    useEffect(() => {
        console.log("=======================");
        console.log("useEffect() is called.");
        console.log(`isFull: ${isFull}`);
    });

    // 컴포넌트가 마운트된 직후 + count 변수가 변경될 때마다 호출됨
    // 이 때 용량이 가득 찼는지 아닌지의 상태를 isFull이라는 state에 저장
    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count value: ${count}`);
    }, [count]);

    return (
        <div style={{ padding: 16 }}>
            <p>{`총 ${count}명 수용했습니다.`}</p>

            <button onClick={increaseCount} disabled={isFull}>
                입장
            </button>
            <button onClick={decreaseCount}>퇴장</button>

            {isFull && <p style={{ color: "red" }}>정원이 가득찼습니다.</p>}
        </div>
    )
}

export default Accommodate;