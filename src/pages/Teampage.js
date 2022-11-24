import './Teampage.css';
import Employee from '../components/Employee';
import { teampage } from '../data/Data';

const Team = () => {
    return (
        <div className="teem">
            <div className="container-teem">
                <div className="teem-header">
                    <h2 className="teem-title">{teampage.title}</h2>
                    <img className="teem-img" src={teampage.img} width="87px" height="4px" />
                    <div className="teem-text">{teampage.text}</div>
                </div>
                <div className="teem-row">
                    {teampage.team.map((emp) =>
                        <Employee emp={emp} key={emp.id} />
                    )}
                </div>
            </div>
        </div>
    )
}
export { Team };