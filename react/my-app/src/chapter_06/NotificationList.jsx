import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    // 개발자 도구에서 로그 구분을 위해 id 추가
    {
        id: 1,
        message: "안녕하세요, 오늘 일정을 알려드립니다.",
    },
    {
        id: 2,
        message: "점심식사 시간입니다.",
    },
    {
        id: 3,
        message: "이제 곧 미팅이 시작됩니다.",
    },
];

var timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notifications: [],
        };
    }

    // 매 1000ms, 즉 1초마다 아래 지시한 작업을 수행
    componentDidMount() {
        const { notifications } = this.state;
        timer = setInterval(() => {
            // reservednotifications에 있는 props를 notifications에 넣어준다
            if(notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications: notifications,
                });
            } else {
                // 과정이 끝나면 notifications를 비워준다
                this.setState({
                    notifications: [],
                });
                clearInterval(timer);
            }
        }, 1000);
    }

    componentWillUnmount() {
        if (timer) {
            clearInterval(timer);
        }
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return (
                        <Notification 
                            // 여기에도 id 추가
                            // map 함수를 사용할 때는 key를 필수적으로 사용해야 함
                            // key: 리액트 엘리먼트를 구분하기 위한 고유의 값
                            key={notification.id}
                            id={notification.id}
                            message={notification.message} 
                        />
                    );
                })}
            </div>
        );
    }
}

// 흐름 정리
// 1번이 마운트 된 후 2번이 마운트 될 때, 재렌더링 되며 마운트되어 있던 1번이 업데이트 된다.
// 3번이 마운트 될 때도 재렌더링 되어 1번, 2번이 업데이트 된다.
// 이후 notification 배열이 비워지면서 1번, 2번, 3번 모두 언마운트된다.

export default NotificationList;