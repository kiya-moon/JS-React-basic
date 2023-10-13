import React from "react";

// id 추가
const students = [
    {
        id: 1,
        name: "React",
    },
    {
        id: 2,
        name: "JS",
    },
    {
        id: 3,
        name: "Java",
    },
    {
        id: 4,
        name: "TS",
    },
];

// AttendanceBook 컴포넌트
// students 배열로부터 학생 정보가 담긱 객체를 받아 학생들의 이름을 목록 형태로 출력하는 컴포넌트
function AttendanceBook(props) {
    return (
        <ul>
            {/* 배열을 렌더링 하기 위해 map 함수 사용 */}
            {students.map((student, index) => {
                // key 추가 - id
                // return <li key={student.id}>{student.name}</li>;

                // key 추가 - 포맷팅 된 문자열
                // return <li key={`student-id-${student.id}`}>{student.name}</li>;

                // key 추가 - index
                return <li key={index}>{student.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBook;