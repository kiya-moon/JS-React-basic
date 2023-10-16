import Card from "./Card";

function ProfileCard(props) {
    return (
        // 타이틀에 이름을 넣고 백그라운드 컬러를 녹색으로 설정
        <Card title="React" backgroundColor="#4ea04e">
            {/* Children으로 간단한 소개글 */}
            <p>안녕하세요.</p>
            <p>리액트를 사용해서 개발하고 있습니다.</p>
        </Card>
    );
}

export default ProfileCard;