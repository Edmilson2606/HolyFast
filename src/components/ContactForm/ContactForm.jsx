import { Link } from 'react-router-dom'
import './ContactForm.css'

// COMPONENT
import Button from '../Button/Button'

// CONTEXT 
import { useAppContext } from '../../contexts/AppContext'

function ContactForm() {
    const { translate } = useAppContext()
    return (
        <section className="container">
            <form className="contact-form">
                <h2>{translate('contact.title')}</h2>
                <section className="form-group">
                    <input
                        className="form-input"
                        type="text"
                        id="name"
                        name="name"
                        placeholder={translate('contact.pl1')}
                    />
                    <input
                        className="form-input"
                        type="email"
                        id="email"
                        name="email"
                        placeholder={translate('contact.pl2')}
                    />
                </section>
                <section className='form-group'>
                    <textarea
                        className="form-input"
                        id="message"
                        name="message"
                        placeholder={translate('contact.pl3')}
                    ></textarea>
                </section>
                <section className='form-group form-group--button'>
                    <Link to="/devotional">
                        <Button buttonStyle="primary" arrow>
                            {translate('contact.cta')}
                        </Button>
                    </Link>
                    <Button type="submit" buttonStyle="secondary" disabled>
                        {translate('general.send')}
                    </Button>
                </section>
            </form>
        </section>
    )
}

export default ContactForm;