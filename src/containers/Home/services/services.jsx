import SessionHeader from "../../../components/sessionHeader/sessionHeader";
import { services } from "../../../components/data";
import Button from "../../../components/button/button";
import "./services.css";

const Services = () => {
    return (
        <div className="serviceContainer" id="services">
            <div>
                <SessionHeader name1 ={"Our"} name2={"Services"}/>
                <div className="services">
                    {services.map(service => (
                        <div className="service" key={service.id}>
                            <img src={service.img}/>
                            <p>{service.title}</p>
                            <Button placeholder={service.btn}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default Services;