import line from '../pages/images/about/line_204.png';
import base from '../pages/images/about/base_198.png';
import './Aboutpage.css';


const About = () => {
    return (
        <div class="about">
            <div class="container-about">
                <div class="about-header">
                    <h2 class="about-title">WHAT POEPLE SAY ABOUT US</h2>
                    <img class="about-img" src={line} width="87px" height="4px" />
                    <div class="about-text">Our clients love us!</div>
                </div>
                <div class="about-row">
                    <div class="about-column">
                        <div class="about-foto"><img class="img__3" src={base} width="96px" height="96px" />
                        </div>
                        <div class="about-info">
                            <div class="about-column-text">“Nullam dapibus blandit orci, viverra gravida dui
                                lobortis eget. Maecenas fringilla urna eu nisl scelerisque.”</div>
                            <div class="about-column-name">Chanel Iman</div>
                            <div class="about-column-position">CEO of Pinterest</div>
                        </div>
                    </div>
                    <div class="about-column">
                        <div class="about-foto"><img class="img__3" src={base} width="96px" height="96px" />
                        </div>
                        <div class="about-info">
                            <div class="about-column-text">“Vivamus luctus urna sed urna ultricies ac tempor dui
                                sagittis. In condimentum facilisis porta.”</div>
                            <div class="about-column-name">ADRIANA LIMA</div>
                            <div class="about-column-position">Founder of Instagram</div>
                        </div>
                    </div>
                    <div class="about-column">
                        <div class="about-foto"><img class="img__3" src={base} width="96px" height="96px" />
                        </div>
                        <div class="about-info">
                            <div class="about-column-text">“Vivamus luctus urna sed urna ultricies ac tempor dui
                                sagittis. In condimentum facilisis porta.”</div>
                            <div class="about-column-name">ANNE HATHAWAY</div>
                            <div class="about-column-position">Lead Designer at Behance</div>
                        </div>
                    </div>
                    <div class="about-column">
                        <div class="about-foto"><img class="img__3" src={base} width="96px" height="96px" />
                        </div>
                        <div class="about-info">
                            <div class="about-column-text">“Phasellus non purus vel arcu tempor commodo. Fusce
                                semper, purus vel luctus molestie, risus sem cursus neque.”</div>
                            <div class="about-column-name">EMMA STONE</div>
                            <div class="about-column-position">Co-Founder of Shazam</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export { About };