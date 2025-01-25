import { Link } from "react-router-dom";

// CONTEXT 
import { useAppContext } from '../../contexts/AppContext'

// ASSETS
import "./Footer.css";
import Logo from "../../assets/logo.svg";
import BrazilIcon from "../../assets/brazil_icon.svg";
import UsaIcon from "../../assets/usa_icon.svg";
import FacebookIcon from "../../assets/facebook_icon.svg";
import TwitterIcon from "../../assets/twitter_icon.svg";
import LinkedinIcon from "../../assets/linkedin_icon.svg";
import InstagramIcon from "../../assets/instagram_icon.svg";

function Footer() {
    const { changeLanguage } = useAppContext();
    const { translate } = useAppContext()
    return (
        <footer className="container">
            <section className="footer-info">
                
                {/* <article className="footer-article">
                    <img src={Logo} alt="Logo"/>

                    <p>{translate('general.footerLogoText')}</p>

                    <nav className="social-links">
                        <a href="#" target="_blank">
                            <img src={FacebookIcon} alt="Facebook" />
                        </a>
                        <a href="#" target="_blank">
                            <img src={TwitterIcon} alt="Twitter" />
                        </a>
                        <a href="#" target="_blank">
                            <img src={LinkedinIcon} alt="LinkedIn" />
                        </a>
                        <a href="#" target="_blank">
                            <img src={InstagramIcon} alt="Instagram" />
                        </a>
                    </nav>
                </article> */}

                {/* <nav className="footer-nav">
                    <h3>{translate('general.pages')}</h3>
                    <ul className="footer-col">
                        <li><Link to="/">{translate('menu.home')}</Link></li>
                        <li><Link to="/fasting">{translate('menu.fasting')}</Link></li>
                        <li><Link to="/devotional">{translate('menu.devotional')}</Link></li>
                        <li><Link to="/contact">{translate('menu.contact')}</Link></li>
                    </ul>
                </nav>

                <nav className="footer-nav">
                    <h3>{translate('general.contact')}</h3>
                    <ul className="footer-col">
                        <li><p>Av. Amada, 10 – Vida Nova | Aracaju – SE | CEP 49000-000</p></li>
                        <li><p>suporte@divino.com.br</p></li>
                        <li><p>(10) 99999-9999</p></li>
                    </ul>
                </nav> */}

            </section>

            <section className="footer-lang-copy">
                <p>Copyright © 2025</p>
                <nav className="footer-langs">
                    <img src={BrazilIcon} alt="Brazil" onClick={() => changeLanguage('br')} />
                    <img src={UsaIcon} alt="USA" onClick={() => changeLanguage('en')} />
                </nav>
            </section>
        </footer>
    );
}

export default Footer;
