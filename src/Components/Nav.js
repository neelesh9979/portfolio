// import { useState } from "react";
import { 
    FaHome, 
    FaPodcast, 
    FaBriefcase, 
    FaNewspaper, 
    FaEnvelopeOpen, 
    FaAdjust  
} from "react-icons/fa";
export default function Nav(){
    //const [isTheme, SetTheme] = useState(false);
    const themeAdjust = (e) =>{
        document.body.classList.toggle("light-mode");
    }
    const  menuChange =(e) =>{
        const event = e.currentTarget; //.getAttribute('data-id');
        document.querySelector(".active-btn").classList.remove("active-btn");
        event.classList.add("active-btn");
        const currentNavId = event.getAttribute('data-id');
        document.querySelector(".active").classList.remove("active");
        document.getElementById(currentNavId).classList.add("active");
        
    }
    return(
        <>
        <div className="controls">
            <div className="control active-btn" data-id="home" onClick={menuChange} >
                <FaHome />
            </div>
            <div className="control" data-id="about" onClick={menuChange}>
                <FaPodcast />
            </div>
            <div className="control" data-id="portfolio" onClick={menuChange}>
                <FaBriefcase />
            </div>
            {/* <div className="control" data-id="blogs" onClick={menuChange}>
                <FaNewspaper />
            </div> */}
            <div className="control" data-id="contact" onClick={menuChange}>
                <FaEnvelopeOpen />
            </div>
        </div>
        <div className="theme-btn"  onClick={themeAdjust}>
            <FaAdjust />
        </div>
        </>
    );
}