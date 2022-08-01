import { BrowserRouter as Router, Routes, NavLink, Route } from 'react-router-dom';
import Features from './Features';
import Pricing from './Pricing';
import Integrations from './Integrations';
import Learn from './Learn';


const Navbar = () => {
    return (
        <div className="navabar">
            <Router>
                <nav>
                    <div className="cloud">
                        <img src='img/IMAGE.png' />
                    </div>
                    <ul className="nav-item">
                        <li><NavLink to='/' activeclassname='selected'>Features</NavLink></ li >
                        <li><NavLink to='/Pricing' activeclassname='selected'>Pricing</NavLink></ li>
                        <li><NavLink to='/Integrations' activeclassname='selected'>Integrations</NavLink></ li>
                        <li><NavLink to='/Learn' activeclassname='selected'>Learn</NavLink></li>
                        <a className='ahref' href="">Sigin up  </a>
                    <button className="btn">Book a demo</button>
                    </ul>
                    
                </nav>
                <Routes>
                    <Route path="/" element={<Features />} />
                    <Route path="/Pricing" element={<Pricing />} />
                    <Route path="/Integrations" element={<Integrations />} />
                    <Route path="/Learn" element={<Learn />} />
                </Routes>
            </Router>
        </div>
    );
};
export default Navbar;