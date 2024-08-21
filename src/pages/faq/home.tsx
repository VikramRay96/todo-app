const FAQHomePage = () => {
    return(
        <>
        <h2>KODNEST Tech</h2>
    <div className="layout">
        <div className="accordion">
            <div className="accordion__question">
                <p>Where is Taj Mahal located?</p>

            </div>
            <div className="accordion__answer">
                <p>Taj Mahal is located in Agra, Uttar Pradesh.</p>

            </div>
        </div>
        <div className="accordion">
            <div className="accordion__question">
                <p>How many planets are there in solar system?</p>

            </div>
            <div className="accordion__answer">
                <p>
                    There are eight planets in solar system.
                    Mercury, Venus, Earth, Mars, Jupiter, Saturn,
                    Uranus, and Neptune.
                </p>

            </div>
        </div>
    </div>
        </>
    )
}
export default FAQHomePage;