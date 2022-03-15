import line from '../pages/images/portfolio/line_161.png';
import foto1 from '../pages/images/portfolio/1_397.png';
import foto2 from '../pages/images/portfolio/2_349.png';
import foto3 from '../pages/images/portfolio/3_445.png';
import foto4 from '../pages/images/portfolio/4_469.png';
import './Portfoliopage.css';


const Portfolio = () => {
    return (
        <div class="portfolio">
            <div class="container-portfolio">
                <div class="portfolio-header">
                    <h2 class="portfolio-title">OUR PORTFOLIO</h2>
                    <img class="portfolio-img" src={line} width="87px" height="4px" />
                    <div class="portfolio-text">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet
                        consectetur, adipisci velit, sed quia non numquam</div>
                </div>
                <div class="categories">
                    <a href="*">All</a>
                    <a href="*">Web</a>
                    <a href="*">Apps</a>
                    <a href="*">Icons</a>
                </div>
                <div class="portfolio-row">
                    <div class="portfolio-column">
                        <img class="img__3" src={foto1} width="541px" height="311px" />
                        <div class="portfolio-column-title">Isometric Perspective Mock-Up</div>
                    </div>
                    <div class="portfolio-column">
                        <img class="img__3" src={foto2} width="541px" height="311px" />
                        <div class="portfolio-column-title">Time Zone App UI</div>
                    </div>
                    <div class="portfolio-column">
                        <img class="img__3" src={foto3} width="541px" height="311px" />
                        <div class="portfolio-column-title">Viro Media Players UI</div>
                    </div>
                    <div class="portfolio-column">
                        <img class="img__3" src={foto4} width="541px" height="311px" />
                        <div class="portfolio-column-title">Blog / Magazine Flat UI Kit</div>
                    </div>
                </div>
                <button class="portfolio-button">LOAD MORE PROJECTS</button>
            </div>
        </div>
    )
}
export { Portfolio };