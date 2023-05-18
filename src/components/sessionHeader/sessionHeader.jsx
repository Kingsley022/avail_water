import './sessionHeader.css';
const SessionHeader = ({name1, name2}) => {
    return (
        <h1 className="heading">{name1}<span>{name2}</span></h1>
    );
}
 
export default SessionHeader;