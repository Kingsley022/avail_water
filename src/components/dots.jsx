const Dots = ({slides, currentIndex, handleDotClick}) => {
    return (
        <div className="dots">
            {slides.map((slide, slideIndex) => (
                <div key={slide.id} className={currentIndex === slideIndex ? "dot active" : "dot"} onClick={()=> handleDotClick(slideIndex)}></div>
            ))}
        </div>
    );
}
 
export default Dots;