import './Portfoliopage.css';
import Project from '../components/Portfolio';
import { portfoliopage } from '../data/Data';

const Portfolio = () => {
    return (
        <div class="portfolio">
            <div class="container-portfolio">
                <div class="portfolio-header">
                    <h2 class="portfolio-title">{portfoliopage.title}</h2>
                    <img class="portfolio-img" src={portfoliopage.img} width="87px" height="4px" />
                    <div class="portfolio-text">{portfoliopage.text}</div>
                </div>
                <div class="categories">
                    <a href="*">All</a>
                    <a href="*">Web</a>
                    <a href="*">Apps</a>
                    <a href="*">Icons</a>
                </div>
                <div class="portfolio-row">
                    {portfoliopage.portfolio.map((proj) =>
                        <Project proj={proj} key={proj.id} />
                    )}
                </div>
                <button class="portfolio-button">LOAD MORE PROJECTS</button>
            </div>
        </div>
    )
}
export { Portfolio };