'user strict';

class Counter1 {
    constructor() {
        this.counter = 0;   
        // Counter 클래스를 만드는 순간 자동으로 0으로 초기화됨
        // 자바의 생성자 느낌인듯
    }

    // 클래스 내에서 함수를 생성할 때는 fucntion을 붙이지 않아도 ok
    increase() {
        this.counter++;
        console.log(this.counter);
        // 5번 증가할 때마다 특정 단어 출력 방법 1
        // 클래스 안에 직접 선언했기 때문에 유동적으로 변경하기가 어려움
        if(this.counter % 5 === 0) {
            console.log('yo!');
        }
    }
}

const coolCounter1 = new Counter1();  // 현재 counter = 0
coolCounter1.increase();
coolCounter1.increase();
coolCounter1.increase();
coolCounter1.increase();
coolCounter1.increase();

// -------------------------------------------------------------

class Counter2 {
    constructor() {
        this.counter = 0;   
        // Counter 클래스를 만드는 순간 자동으로 0으로 초기화됨
        // 자바의 생성자 느낌인듯
    }

    // 5번 증가할 때마다 특정 단어 출력 방법 2
    // 콜백함수 사용
    increase(runIf5Times) {
        this.counter++;
        console.log(this.counter);

        if(this.counter % 5 === 0) {
            // 숫자를 정확하게 알고 싶을 때는 파라미터를 전달해준다
            runIf5Times(this.counter);
        }
    }
}

// 장점은 클래스 밖에서 마음껏 바꿀 수 있다는 점
const coolCounter2 = new Counter2();
function printSomething(num) {
    // console.log(`yo! ${num}`);
    console.log(`Wow! ${num}`);
}

function alertNum(num) {
    alert(`Wow! ${num}`);
}

coolCounter2.increase(printSomething);
coolCounter2.increase(printSomething);
coolCounter2.increase(printSomething);
coolCounter2.increase(printSomething);
coolCounter2.increase(printSomething);  // (console창) Wow! 5

coolCounter2.increase(printSomething);
coolCounter2.increase(printSomething);
coolCounter2.increase(printSomething);
coolCounter2.increase(printSomething);
coolCounter2.increase(alertNum);    // (alert창) Wow! 10

// 하지만 increase()를 계속 호출해야 해서 불편하다

