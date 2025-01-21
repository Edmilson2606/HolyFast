import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import DevotionalList from '../components/DevotionalList/DevotionalList';
import Footer from '../components/Footer/Footer';

// CONTEXT 
import { useAppContext } from '../contexts/AppContext'

function Devotional() {
    const { translate } = useAppContext()
    return (
        <>
            <Header />
            <Banner title={translate('menu.devotional')} image="devotional.jpg" />
            <DevotionalList />
            <Footer />
        </>
    )
}

export default Devotional;