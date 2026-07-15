import './button.css';

const Button = props =>{
    const classname = [
        'formbutton',
        (props.active && 'active')
    ].filter(Boolean).join(' ');
    return(
        <>
            <button className={classname} onClick={props.onClick}>
                {props.title}
            </button>
        </>
)};

export default Button;