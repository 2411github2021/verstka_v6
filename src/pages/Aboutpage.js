import './Aboutpage.css';
import Review from '../components/Review';

const About = ({ items }) => {

    return (
        <div className="about">
            <div className="container-about">
                <div className="about-header">
                    <h2 className="about-title">{items.aboutpage.title}</h2>
                    <img className="about-img" src={items.aboutpage.img} width="87px" height="4px" />
                    <div className="about-text">{items.aboutpage.text}</div>
                </div>
                <div className="about-row">
                    {items.aboutpage.reviews.map((rev) =>
                        <Review rev={rev} key={rev.id} />
                    )}
                </div>
            </div>
        </div>
    )
}
export { About };