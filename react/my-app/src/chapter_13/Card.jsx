// Specialization + Containment
// 범용적으로 재사용이 가능한 Card 컴포넌트
function Card(props) {
    const { title, backgroundColor, children } = props;

    return (
        // Specialization
        <div
            style={{
                margin: 8,
                padding: 8,
                borderRadius: 8,
                boxShadow: "0px 0px 4px grey",
                backgroundColor: backgroundColor || "white",
            }}
        >
            {/* Specialization */}
            {title && <h1>{title}</h1>}
            
            {/* Containment */}
            {children}
        </div>
    );
}

export default Card;