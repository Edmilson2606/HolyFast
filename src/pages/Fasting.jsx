import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import FastingList from '../components/FastingList/FastingList';
import Footer from '../components/Footer/Footer';

// CONTEXT 
import { useAppContext } from '../contexts/AppContext'

function Fasting() {
    const { translate } = useAppContext()
    return (
        <>
            <Header />
            <Banner title={translate('menu.fasting')} image="fast.jpg"/>
            <FastingList />
            <Footer />
        </>
    )
}

export default Fasting;