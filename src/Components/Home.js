import {FaDownload} from "react-icons/fa"
export default function Home(){
    return(
        <>
        <header className="container header active" id="home">
        <div className="header-content">
            <div className="left-header">
                <div className="h-shape"></div>
                <div className="image">
                    <img src="img/hero.png" alt="" />
                </div>
            </div>
            <div className="right-header">
                <h1 className="name">
                    Hi, I'm <span>Neelesh Sahu.</span>
                    A Web Developer.
                </h1>
                <p>
                    I'm a Web Developer, I love to create beautiful and functional websites,
                    with almost 5 years of experience working in the field of Web, SEO, and 
                    Ecommerce Development. I have a Bachelors’s Degree in Computer Science from the University of RGPV.
                </p>
                <div className="btn-con">
                    <a href="" className="main-btn">
                        <span className="btn-text">Download CV</span>
                        <span className="btn-icon"><FaDownload /></span>
                    </a>
                </div>
            </div>
        </div>
    </header>
        </>
    );
}