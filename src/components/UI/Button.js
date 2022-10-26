import "../UI/Button.css";

function Button (props) {
    const classes = "buttonasset " + props.className;
    return (
        <div className={classes}>{props.children}</div>
    );
}

export default Button;