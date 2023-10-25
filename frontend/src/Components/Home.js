import {FaDownload} from "react-icons/fa";
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
                I'm a passionate software developer with a love for crafting elegant code and solving complex problems. With 5 years of experience in the software development industry, I've had the privilege of working on a wide range of projects, from web applications and Ecommerce site to backend systems and everything in between.
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