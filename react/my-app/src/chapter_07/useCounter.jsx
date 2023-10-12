import React, { useState } from "react";

// 초기 카운트 값을 파라미터로 받아서 카운트라는 이름의 state를 생성하여 값을 제공하고 카운트 증가 및 감소를 편리하게 할 수 있도록 함수를 제공하는 Hook
// 그래서 useCounter 훅을 사용하면 어떤 함수 컴포넌트에서든지 카운트 기능을 쉽게 사용할 수 있다.
function useCounter(initialValue) {
    const [count, setCount] = useState(initialValue);

    const increaseCount = () => setCount((count) => count + 1);
    const decreaseCount = () => setCount((count) => Math.max(count - 1, 0));

    return [count, increaseCount, decreaseCount];
}

export default useCounter;