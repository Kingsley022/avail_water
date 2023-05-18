import {useToggle} from '../../Hooks/useToggle';
import { Link as Scroll } from 'react-scroll';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AppContext } from '../../App';
import { navLinks } from '../../components/data';
import MenuBar from '../../components/menu';
import Form  from '../Form/form';
import './header.css';


const Header = () => {

    const[navs, setNavs] = useState(navLinks);
    const[isHovering, setIsHovering] = useState(false);

    const {onToggle, isToggled} = useToggle();
    const active = isToggled ? "active" : "";
    const {items} = useContext(AppContext);

    const handleMouseOver =()=>{
        setIsHovering(!isHovering);
    }
   
    const checkActiveLink = oldNav =>{
        const newNav = navs.map(nav => {
            if(nav.id === oldNav.id){
                return {...nav, active: true}
            }else{
                return {...nav, active: false}
            }
        })
        setNavs(newNav);
    }

    return (
        <div className="header">
            <div className="logo">
                <img src='../images/logo.png' alt="logo"/>
            </div>

            <div className="linksContainer">
                <ul className={`links ${active}`}>
                    {navs.map((nav) =>{
                        return (
                            <li key={nav.id} className={nav.active ? "active": ''}>
                                <Scroll to={nav.element} spy={true} className="a" smooth={true} offset={-80} duration={0} delay={500} onClick={() => checkActiveLink(nav)}>
                                    {nav.name}
                                </Scroll>
                            </li>
                            
                        );
                    })}
                </ul>

                <div className="iconsContainer">
                    <>
                        <div className="icon">
                            <i className='fa fa-search'></i>
                        </div>

                        
                        <div className="icon">
                            <Link to='/cart'>
                                <i className='fa fa-shopping-cart'></i>
                                <span> Cart<sup>{items.length === 0 ? "" : items.length}</sup></span>
                            </Link>
                        </div>
                    

                        <div className="icon" onMouseOver={handleMouseOver}>
                            <i className='fa fa-user'></i>
                            <span> User</span>
                        </div>

                        <MenuBar onToggle={onToggle} isToggled={isToggled}/>


                    </>

                </div>

                {isHovering && <Form/>}
            </div>

        </div>   
    );
}
 
export default Header;