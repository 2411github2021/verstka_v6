import line from '../pages/images/teem/line_119.png';
import base from '../pages/images/teem/base_560.png';
import bases from '../pages/images/teem/base_628.png';
import './Teampage.css';


const Team = () => {
    return (
        <div className="teem">
            <div className="container-teem">
                <div className="teem-header">
                    <h2 className="teem-title">MEET OUR BEAUTIFUL TEAM</h2>
                    <img className="teem-img" src={line} width="87px" height="4px" />
                    <div className="teem-text">We are a small team of designers and developers, who help brands
                        with big ideas.</div>
                </div>
                <div className="teem-row">
                    <div className="teem-column">
                        <img className="img__10" src={base} width="200px" height="200px" />
                        <div className="teem-column-title">ANNE HATHAWAY</div>
                        <div className="teem-column-subtitle">CEO / Marketing Guru</div>
                        <div className="teem-column-text">Lorem ipsum dolor sit amet,
                            consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                            dolore magna.</div>
                        <div className="teem-icon">
                            <img className="img__2" src={bases} width="32px" height="32px" />
                            <img className="img__2" src={bases} width="32px" height="32px" />
                            <img className="img__2" src={bases} width="32px" height="32px" />
                            <img className="img__2" src={bases} width="32px" height="32px" />
                        </div>
                    </div>
                    <div className="teem-column">
                        <img className="img__10" src={base} width="200px" height="200px" />
                        <div className="teem-column-title">Kate Upton</div>
                        <div className="teem-column-subtitle">Creative Director</div>
                        <div className="teem-column-text">Duis aute irure dolor in in voluptate velit esse cillum
                            dolore
                            fugiat nulla pariatur. Excepteur sint occaecat non diam proident.</div>
                        <div className="teem-icon">
                            <img className="img__2" src={bases} width="32px" height="32px" />
                            <img className="img__2" src={bases} width="32px" height="32px" />
                            <img className="img__2" src={bases} width="32px" height="32px" />
                        </div>
                    </div>
                    <div className="teem-column">
                        <img className="img__10" src={base} width="200px" height="200px" />
                        <div className="teem-column-title">Olivia Wilde</div>
                        <div className="teem-column-subtitle">Lead Designer</div>
                        <div className="teem-column-text">Nemo enim ipsam voluptas sit aspernatur aut odit aut
                            fugit, sed
                            quia consequuntur magni dolores eos qui ratione voluptatem nesciunt.</div>
                        <div className="teem-icon">
                            <img className="img__2" src={bases} width="32px" height="32px" />
                            <img className="img__2" src={bases} width="32px" height="32px" />
                            <img className="img__2" src={bases} width="32px" height="32px" />
                            <img className="img__2" src={bases} width="32px" height="32px" />
                        </div>
                    </div>
                    <div className="teem-column">
                        <img className="img__10" src={base} width="200px" height="200px" />
                        <div className="teem-column-title">Ashley Greene</div>
                        <div className="teem-column-subtitle">SEO / Developer</div>
                        <div className="teem-column-text">Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem
                            accusantium doloremque laudantium, totam rem aperiam.</div>
                        <div className="teem-icon">
                            <img className="img__2" src={bases} width="32px" height="32px" />
                            <img className="img__2" src={bases} width="32px" height="32px" />
                            <img className="img__2" src={bases} width="32px" height="32px" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export { Team };