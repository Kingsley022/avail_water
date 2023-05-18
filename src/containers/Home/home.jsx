import Carousel from './Carousel/carousel';
import Services from './services/services';
import WaterService from './water_supply/water';
import HomeServices from './home_service/homeService';
import Blog from './blogs/blog';
import Footer from './footer/footer';
import './home.css';

const Home = () => {
    
    return (
        <div>
            <Carousel/>
            <Services/>
            <WaterService/>
            <HomeServices/>
            <Blog/>
            <Footer/>
        </div>
        
    );
}
 
export default Home;