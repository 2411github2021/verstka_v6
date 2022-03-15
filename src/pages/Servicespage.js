import line from '../pages/images/services/line_94.png';
import shape from '../pages/images/services/shape_16_505.png';
import './Servicespage.css';

const Services = () => {
    return (
        <div className="services">
            <div className="container-services">
                <div className="services-header">
                    <h2 className="services-title">SERVICES WE PROVIDE</h2>
                    <img className="services-img" src={line} width="87px" height="4px" />
                    <div className="services-text">We are working with both individuals and businesses from all over
                        the globe to create awesome websites and applications.</div>
                </div>
                <div className="services-row">
                    <div className="services-column">
                        <img className="img__1" src={shape} width="159px" height="126px" />
                        <div className="column-title">Branding</div>
                        <div className="column-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                            diam nonummy nibh.</div>
                    </div>
                    <div className="services-column">
                        <img className="img__1" src={shape} width="159px" height="126px" />
                        <div className="column-title">Design</div>
                        <div className="column-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        </div>
                    </div>
                    <div className="services-column">
                        <img className="img__1" src={shape} width="159px" height="126px" />
                        <div className="column-title">Development</div>
                        <div className="column-text">At vero eos et accusamus et iusto odio dignissimos qui
                            blanditiis praesentium.</div>
                    </div>
                    <div className="services-column">
                        <img className="img__1" src={shape} width="159px" height="126px" />
                        <div className="column-title">ROCKET SCIENCE</div>
                        <div className="column-text">Et harum quidem rerum est et expedita distinctio. Nam libero
                            tempore.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export { Services };