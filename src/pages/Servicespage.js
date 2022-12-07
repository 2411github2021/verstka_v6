import Service from '../components/Service';
import './Servicespage.css';

const Services = ({ items }) => {
    return (
        <div className="services">
            <div className="container-services">
                <div className="services-header">
                    <h2 className="services-title">{items.servicepage.title}</h2>
                    <img className="services-img" src={items.servicepage.img} width="87px" height="4px" />
                    <div className="services-text">{items.servicepage.text}</div>
                </div>
                <div className="services-row">
                    {items.servicepage.services.map((ser) =>
                        <Service ser={ser} key={ser.id} />)
                    }
                </div>
            </div>
        </div>
    )
}
export { Services };