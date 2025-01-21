import './DevotionalList.css'

// CONTEXT 
import { useAppContext } from '../../contexts/AppContext'

function DevotionalList() {
    const { translate } = useAppContext()

    return (
        <section className="container">
            <h2>DIA 1 DE JANEIRO</h2>
            <section className="devotional-section">
                <article className="devotional-list">
                    <h3>{translate('devotional.title1')}</h3>
                    <p>{translate('devotional.text1-1')}</p>
                    <p>{translate('devotional.text1-2')}</p>
                    <p>{translate('devotional.text1-3')}</p>
                </article>
                <article className="devotional-list">
                    <h3>{translate('devotional.title2')}</h3>
                    <p>{translate('devotional.text2-1')}</p>
                    <h3>{translate('devotional.title3')}</h3>
                    <p>{translate('devotional.text3-1')}</p>
                </article>
            </section>
        </section>
    )
}

export default DevotionalList;