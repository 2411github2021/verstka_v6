import line from '../pages/images/skills/line_127.png';
import base1 from '../pages/images/skills/base_151.png';
import base2 from '../pages/images/skills/base_485.png';
import base3 from '../pages/images/skills/base_490.png';
import base4 from '../pages/images/skills/base_495.png';
import './Skillspage.css';


const Skills = () => {
    return (
        <div className="skills">
            <div className="container-skills">
                <div className="skills-header">
                    <h2 className="skills-title">WE GOT SKILLS!</h2>
                    <img className="skills-img" src={line} width="87px" height="4px" />
                    <div className="skills-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                </div>
                <div className="skills-row">
                    <div className="skills-column">
                        <img className="img__2" src={base1} width="160px" height="160px" />
                        <div className="skills-col">90%</div>
                        <div className="skills-column-title">Web Design</div>
                    </div>
                    <div className="skills-column">
                        <img className="img__2" src={base2} width="160px" height="160px" />
                        <div className="skills-col">75%</div>
                        <div className="skills-column-title">HTML / CSS</div>
                    </div>
                    <div className="skills-column">
                        <img className="img__2" src={base3} width="160px" height="160px" />
                        <div className="skills-col">70%</div>
                        <div className="skills-column-title">GRAPHIC DESIGN</div>
                    </div>
                    <div className="skills-column">
                        <img className="img__2" src={base4} width="160px" height="160px" />
                        <div className="skills-col">85%</div>
                        <div className="skills-column-title">UI / UX</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export { Skills };