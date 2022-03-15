import logo from '../pages/images/home/logo_795.png';
import './Homepage.css';

const Home = () => {
    return (
        <div>
            <header className="header">
                <div className="header__row">
                    <div className="header__logo"><img src={logo} width="118px" height="37px" /></div>
                    <div className="header-text">
                        <p>Hi there! We are the new kids on the block</p>
                        <p>and we build awesome websitesand mobile apps.</p>
                    </div>
                    <button className="header-button" >WORK WITH US!</button>
                </div>
            </header>
        </div>
    )
}
export { Home };