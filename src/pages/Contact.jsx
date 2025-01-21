import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import ContactForm from '../components/ContactForm/ContactForm';
import Footer from '../components/Footer/Footer';

// CONTEXT 
import { useAppContext } from '../contexts/AppContext'

function Contact() {
    const { translate } = useAppContext()
    return (
        <>
            <Header />
            <Banner title={translate('menu.contact')} image="contact.jpg" />
            <ContactForm />
            <Footer />
        </>
    )
}

export default Contact;