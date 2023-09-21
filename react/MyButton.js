// 리액트 컴포넌트 예제
'user strict';

function MyButton(props) {
    const [isClicked, setIsClicked] = React.useState(false);

    return React.createElement(
        'button',
        { onClick: () => setIsClicked(true) },
        isClicked ? 'Clicked!' : 'Click here!'
    )
}

// 리액트 DOM의 렌더링 함수를 사용하여 컴포넌트를 돔컨테이너에 렌더링 하는 과정
const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(MyButton), domContainer);