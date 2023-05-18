import "./button.css";
const Button = ({placeholder, btn2}) => {
    return (
        <button className={`btn ${btn2}`}>{placeholder}</button>
    );
}
 
export default Button;