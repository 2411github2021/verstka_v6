import './Skillspage.css';
import Skill from '../components/Skill';
import { skillspage } from '../data/Data';

const Skills = () => {
    return (
        <div className="skills">
            <div className="container-skills">
                <div className="skills-header">
                    <h2 className="skills-title">{skillspage.title}</h2>
                    <img className="skills-img" src={skillspage.img} width="87px" height="4px" />
                    <div className="skills-text">{skillspage.text}</div>
                </div>
                <div className="skills-row">
                    {skillspage.skills.map((skl) =>
                        <Skill skl={skl} key={skl.id} />)
                    }
                </div>
            </div>
        </div>
    )
}
export { Skills };