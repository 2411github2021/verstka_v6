import './Teampage.css';
import Employee from '../components/Employee';

const Team = ({ items }) => {
    return (
        <div className="teem">
            <div className="container-teem">
                <div className="teem-header">
                    <h2 className="teem-title">{items.teampage.title}</h2>
                    <img className="teem-img" src={items.teampage.img} width="87px" height="4px" />
                    <div className="teem-text">{items.teampage.text}</div>
                </div>
                <div className="teem-row">
                    {items.teampage.team.map((emp) =>
                        <Employee emp={emp} key={emp.id} />
                    )}
                </div>
            </div>
        </div>
    )
}
export { Team };