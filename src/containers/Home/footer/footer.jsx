import Button from "../../../components/button/button";
import "./footer.css";
const Footer = () => {
    return (
        <div className="footerContainer">
            <div className="footer">
                <div className="socialHandles">
                    <img src="images/logo.png"/>
                    <p>Follow us on</p>
                    <div className="handles">
                        <i className="fa fa-facebook"></i>
                        <i className="fa fa-twitter"></i>
                        <i className="fa fa-instagram"></i>
                        <i className="fa fa-linkedin"></i>
                    </div>
                </div>

                <div className="contacts">
                    <h3>Contact-Info</h3>
                    <p><i className="fa fa-phone"></i> +234 9129131925</p>
                    <p><i className="fa fa-phone"></i> +234 8162482129</p>
                    <p className="email"><i className="fa fa-envelope"></i> avails11@avails.com</p>
                    <p><i className="fa fa-map-marker"></i> Nigeria Enugu-410470</p>
                </div>

                <div className="quickLinks">
                    <h3>Quick Links</h3>
                    <p><i className="fa fa-arrow-right"></i> Home</p>
                    <p><i className="fa fa-arrow-right"></i> Services</p>
                    <p><i className="fa fa-arrow-right"></i> Reviews</p>
                    <p><i className="fa fa-arrow-right"></i> Blogs</p>
                </div>

                <div className="newLetter">
                    <h3>New Letter</h3>
                    <p>Subscribe for latest updates</p>
                    <input placeholder="Email..."/><br/>
                    <Button placeholder={"Subscribe"}/>
                </div>
            </div>

            <div className="foot">
                <p>@<span>Just_Kingsley</span>|All Right Reserved</p>
            </div>

        </div>
    );
}
 
export default Footer;