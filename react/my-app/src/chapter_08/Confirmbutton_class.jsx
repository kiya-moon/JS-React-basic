import React from "react";

// Class Component
class ConfirmButton_class extends React.Component {
    // bind 방식
    // constructor(props) {
    //     super(props);

    //     // 확인여부를 저장하기 위해 state에 isConfirmed라는 변수를 하나 갖고 있으며, 초기값은 false
    //     this.state = {
    //         isConfirmed: false,
    //     };

    //     this.handleConfirm = this.handleConfirm.bind(this);
    // }

    // // 버튼의 onclick 이벤트를 처리하기 위해서 이벤트 핸들러로 handleConfirm() 함수를 정의
    // handleConfirm() {
    //     this.setState((prevState) => ({
    //         isConfirmed: !prevState.isConfirmed,
    //     }));
    // }

    // class fields syntax 방식
    constructor(props) {
        super(props);

        // 확인여부를 저장하기 위해 state에 isConfirmed라는 변수를 하나 갖고 있으며, 초기값은 false
        this.state = {
            isConfirmed: false,
        };
    }

    // 버튼의 onclick 이벤트를 처리하기 위해서 이벤트 핸들러로 handleConfirm() 함수를 정의
    // Arraow Function 사용
    handleConfirm = () => {
        this.setState((prevState) => ({
            isConfirmed: !prevState.isConfirmed,
        }));
    }

    render() {
        return (
            <button
                onClick={this.handleConfirm}
                disabled={this.state.isConfirmed}
            >
                {this.state.isConfirmed ? "확인됨" : "확인하기"}
            </button>
        );
    }
}

export default ConfirmButton_class;