import './FastingList.css'

// CONTEXT 
import { useAppContext } from '../../contexts/AppContext'

function FastingList() {
    const { translate } = useAppContext()
    return (
        <section className="container">
            <h2 className="fasting-title">{translate('fasting.title')}</h2>
            <section className="fasting-list">
                <article className="fasting-article">
                    <h3>{translate('fasting.listTitle1')}</h3>
                    <p>{translate('fasting.listSubtitle1')}</p>
                    <ul>
                        <li>{translate('fasting.list1-1')}</li>
                        <li>{translate('fasting.list1-2')}</li>
                        <li>{translate('fasting.list1-3')}</li>
                        <li>{translate('fasting.list1-4')}.</li>
                        <li>{translate('fasting.list1-5')}</li>
                        <li>{translate('fasting.list1-6')}</li>
                        <li>{translate('fasting.list1-7')}</li>
                        <li>{translate('fasting.list1-8')}</li>
                        <li>{translate('fasting.list1-9')}</li>
                        <li>{translate('fasting.list1-10')}</li>
                    </ul>
                </article>
                <article className="fasting-article">
                    <h3>{translate('fasting.listTitle2')}</h3>
                    <p>{translate('fasting.listSubtitle2')}</p>
                    <ul>
                        <li>{translate('fasting.list2-1')}</li>
                        <li>{translate('fasting.list2-2')}</li>
                        <li>{translate('fasting.list2-3')}</li>
                        <li>{translate('fasting.list2-4')}</li>
                        <li>{translate('fasting.list2-5')}</li>
                        <li>{translate('fasting.list2-6')}</li>
                        <li>{translate('fasting.list2-7')}</li>
                        <li>{translate('fasting.list2-8')}</li>
                        <li>{translate('fasting.list2-9')}</li>
                        <li>{translate('fasting.list2-10')}</li>
                        <li>{translate('fasting.list2-11')}.</li>
                        <li>{translate('fasting.list2-12')}</li>
                        <li>{translate('fasting.list2-13')}</li>
                        <li>{translate('fasting.list2-14')}</li>
                        <li>{translate('fasting.list2-15')}</li>
                        <li>{translate('fasting.list2-16')}.</li>
                    </ul>
                </article>
            </section>
        </section>
    )
}

export default FastingList;