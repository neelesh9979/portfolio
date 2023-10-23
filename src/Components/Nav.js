import { FaHome, FaPodcast, FaBriefcase, FaNewspaper, FaEnvelopeOpen, FaAdjust  } from "react-icons/fa";
export default function Nav(){
    return(
        <>
        <div className="controls">
            <div className="control active-btn" data-id="home" >
                <FaHome />
            </div>
            <div className="control" data-id="about">
                <FaPodcast />
            </div>
            <div className="control" data-id="portfolio">
                <FaBriefcase />
            </div>
            <div className="control" data-id="blogs">
                <FaNewspaper />
            </div>
            <div className="control" data-id="contact">
                <FaEnvelopeOpen />
            </div>
        </div>
        <div className="theme-btn">
            <FaAdjust />
        </div>
        </>
    );
}