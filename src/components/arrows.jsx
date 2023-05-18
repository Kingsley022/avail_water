const Arrows = ({handlePrev, handleNext}) => {
    return (
        <div className="arrows">
            <span className="leftArrow" onClick={handlePrev}>&#60;</span>
            <span className="rightArrow" onClick={handleNext}>&#62;</span>
        </div>
    );
}
 
export default Arrows;