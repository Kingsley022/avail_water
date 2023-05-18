const MenuBar = ({onToggle, isToggled}) => {
    let classes = 'fa fa-';
    classes += isToggled ? 'times' : 'bars';
    
    return ( 
        <div className="menuBtn" onClick={onToggle}>
            <i className={classes}></i> 
        </div>
     );
}
 
export default MenuBar;