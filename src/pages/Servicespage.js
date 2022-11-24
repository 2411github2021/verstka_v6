import Service from '../components/Service';
import './Servicespage.css';
import { servicepage } from '../data/Data';

const Services = () => {
    return (
        <div className="services">
            <div className="container-services">
                <div className="services-header">
                    <h2 className="services-title">{servicepage.title}</h2>
                    <img className="services-img" src={servicepage.img} width="87px" height="4px" />
                    <div className="services-text">{servicepage.text}</div>
                </div>
                <div className="services-row">
                    {servicepage.services.map((ser) =>
                        <Service ser={ser} key={ser.id} />)
                    }
                </div>
            </div>
        </div>
    )
}
export { Services };