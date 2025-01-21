import './Video.css'

function Video() {
    return (
        <section className="container video">
            <video autoPlay controls >
                <source src="/bibliaSagrada.mp4" type="video/mp4" />
            </video>
        </section>
    )
}

export default Video;