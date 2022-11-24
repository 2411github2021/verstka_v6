import './Aboutpage.css';
import Review from '../components/Review';
import { aboutpage } from '../data/Data';

const About = () => {
    return (
        <div className="about">
            <div className="container-about">
                <div className="about-header">
                    <h2 className="about-title">{aboutpage.title}</h2>
                    <img className="about-img" src={aboutpage.img} width="87px" height="4px" />
                    <div className="about-text">{aboutpage.text}</div>
                </div>
                <div className="about-row">
                    {aboutpage.reviews.map((rev) =>
                        <Review rev={rev} key={rev.id} />
                    )}
                </div>
            </div>
        </div>
    )
}
export { About };