import './Banner.css'

function Banner(props) {
    return (
        <section className="banner" style={{ backgroundImage: `url(/${props.image})` }}>
            <article className="container">
                <h1 className="title-panel">{props.title}</h1>
            </article>
        </section>
    )
}

export default Banner;