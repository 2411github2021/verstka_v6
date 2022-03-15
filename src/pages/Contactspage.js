import line from '../pages/images/contacts/line_237.png';
import './Contactspage.css';


const Contacts = () => {
    return (
        <div className="contacts">
            <div className="container-contacts">
                <div className="contacts-header">
                    <h2 className="contacts-title">GET IN TOUCH</h2>
                    <img className="contacts-img" src={line} width="87px" height="4px" />
                    <div className="contacts-text">1600 Pennsylvania Ave NW, Washington, DC 20500, United States of
                        America. Tel: (202) 456-1111</div>
                </div>
                <form className="contacts" action="/" method="get">
                    <div className="inp">
                        <input type="text" name="user_name" placeholder="Your Name *" />
                        <input type="email" name="user_mail" placeholder="Your Email *" />
                    </div>
                    <textarea name="user_message" placeholder="Your Message *"></textarea>
                    <button type="submit">SEND MESSAGE</button>
                </form>
            </div>
        </div>
    )
}
export { Contacts };