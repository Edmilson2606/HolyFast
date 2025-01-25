import { Link } from 'react-router-dom';
import './Hero.css';
import Button from '../Button/Button';

// CONTEXT 
import { useAppContext } from '../../contexts/AppContext'

function Hero() {
    const { translate } = useAppContext()
    return (
        <section className="container hero">
            <article className="hero-text">
                <h1>{translate('hero.title')}</h1>
                <p>{translate('hero.subtitle')}</p>
            </article>
            <Link to="/devotional">
                <Button buttonStyle="primary" arrow>
                    {translate('hero.cta')}
                </Button>
            </Link>
        </section>
    );
}

export default Hero;
