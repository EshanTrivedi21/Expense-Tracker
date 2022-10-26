import "../UI/Card.css";

function Card(props) {
    const classes = 'cardasset ' + props.className;
    return (
        <div className={classes} >{props.children}</div>
    );
}

export default Card;