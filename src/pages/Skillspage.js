import './Skillspage.css';
import Skill from '../components/Skill';

const Skills = ({ items }) => {
    return (
        <div className="skills">
            <div className="container-skills">
                <div className="skills-header">
                    <h2 className="skills-title">{items.skillspage.title}</h2>
                    <img className="skills-img" src={items.skillspage.img} width="87px" height="4px" />
                    <div className="skills-text">{items.skillspage.text}</div>
                </div>
                <div className="skills-row">
                    {items.skillspage.skills.map((skl) =>
                        <Skill skl={skl} key={skl.id} />)
                    }
                </div>
            </div>
        </div>
    )
}
export { Skills };