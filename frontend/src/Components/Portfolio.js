export default function portfolio(){
    return(
        <>
        <section className="container" id="portfolio">
            <div className="main-title">
                <h2>My <span>Portfolio</span><span className="bg-text">My Work</span></h2>
            </div>
            <p className="port-text">
                Here is some of my work that I've done in various programming languages.
            </p>
            <div className="portfolios">
                <div className="portfolio-item">
                    <div className="image">
                        <img src="img/urbancan-small.png" alt=""  />
                    </div>
                    <div className="hover-items">
                        <h3>Urbancan</h3>
                        <div className="icons">
                            <a href="#" className="icon">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="#" className="icon">
                                <i className="fab fa-behance"></i>
                            </a>
                            <a href="#" className="icon">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}