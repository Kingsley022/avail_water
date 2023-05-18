import { waterService } from "../../../components/data";
import SessionHeader from "../../../components/sessionHeader/sessionHeader";
import Button from "../../../components/button/button";
import { useContext } from "react";
import { AppContext } from "../../../App";
import "./water.css";

const WaterService = () => {
    const{handleAddItem} = useContext(AppContext);

    return (
        <div className="waterServiceContainer">
            <SessionHeader name1={"Water"} name2={"Supply"}/>
            <div className="services">
                {waterService.map(service => (
                    <div className="service" key={service.id}>
                        <img src={service.img}/>
                        <p className='title'>{service.title}</p>
                        <p className="description">{service.description}</p>
                        <p className="prize"><span>₦</span>{service.prize}</p>
                        <div className="btns">
                            <Button
                                placeholder={<span className="fa fa-shopping-cart" onClick={()=>handleAddItem(service)}> Add to cart</span>}
                                btn2={"cartBtn"}
                            />
                            <Button placeholder={"Order Now"}/>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default WaterService;