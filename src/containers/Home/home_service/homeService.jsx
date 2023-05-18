import SessionHeader from "../../../components/sessionHeader/sessionHeader";
import { workers } from "../../../components/data";
import Button from "../../../components/button/button";
import "./homeService.css";

const HomeServices = () => {
    return (
        <div className="homeServiceContainer">
            <div className="homeHeader">
                <SessionHeader name1={"Home"} name2={"Services"}/>
            </div>

            <div className="services">
                {workers.map(service => (
                    <div className="service" key={service.id}>
                        <img src={service.src}/>
                        <p className="title">{service.title}</p>
                        <p className={"description"}>{service.description}</p>
                        <Button placeholder={service.btn}/>
                    </div>
                ))}
            </div>

            <div className="more">
                    <Button placeholder={"view more"} btn2={"btnStyle"}/>
            </div>
        </div>
    );
}
 
export default HomeServices;