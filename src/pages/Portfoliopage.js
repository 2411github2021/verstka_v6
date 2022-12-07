import './Portfoliopage.css';
import Project from '../components/Portfolio';

const Portfolio = ({ items }) => {
    return (
        <div class="portfolio">
            <div class="container-portfolio">
                <div class="portfolio-header">
                    <h2 class="portfolio-title">{items.portfoliopage.title}</h2>
                    <img class="portfolio-img" src={items.portfoliopage.img} width="87px" height="4px" />
                    <div class="portfolio-text">{items.portfoliopage.text}</div>
                </div>
                <div class="categories">
                    <a href="*">All</a>
                    <a href="*">Web</a>
                    <a href="*">Apps</a>
                    <a href="*">Icons</a>
                </div>
                <div class="portfolio-row">
                    {items.portfoliopage.portfolio.map((proj) =>
                        <Project proj={proj} key={proj.id} />
                    )}
                </div>
                <button class="portfolio-button">LOAD MORE PROJECTS</button>
            </div>
        </div>
    )
}
export { Portfolio };