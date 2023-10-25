import { useState } from "react";
import { 
    FaArrowRight,
    FaMapMarkedAlt,
    FaEnvelopeOpen,
    FaUserGraduate,
    FaMobile,
    FaGlobeAfrica,
    FaFacebookSquare,
    FaTwitterSquare 
} from "react-icons/fa"

export default function Contant(){
    const [onInput, setInput] = useState({
        name: '',
        email:'',
        subject:'',
        content:''
    });
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false); 
    const validateValues =(inputField) =>{
        let errors = {};
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if(emailPattern.test(inputField.email) === false){
            errors.email = "Email is not valid!";
        }
        if(inputField.name == '' || inputField.name == null){
            errors.name = "Enter your name";
        }
        if(inputField.subject == '' || inputField.subject == null){
            errors.subject = "Enter your subject";
        }
        if(inputField.content == '' || inputField.content == null || inputField.content.length <= 5 ){
            errors.content = "Add minimum 5 words in message";
        }
        setErrors(errors);
        return errors;
    }
    const handleChange =(e) =>{
        setInput({...onInput, [e.target.name]:e.target.value});
    }
    const handleSubmit =(e) =>{
        e.preventDefault();
        validateValues(onInput);
    }
    return(
        <>
        <section className="container contact" id="contact">
            <div className="contact-container">
                <div className="main-title">
                    <h2>Contact <span>Me</span><span className="bg-text">Contact</span></h2>
                </div>
                <div className="contact-content-con">
                    <div className="left-contact">
                        <h4>Get in Touch with Us.</h4>
                        <div className="contact-info">
                            <div className="contact-item">
                                <div className="icon">
                                    <FaMapMarkedAlt />
                                    <span>Location</span>
                                </div>
                                <p>
                                    : Sector 62A Noida (201309), Gautam Buddha Nagar. 
                                </p>
                            </div>
                            <div className="contact-item">
                                <div className="icon">
                                    <FaEnvelopeOpen />
                                    <span>Email</span>
                                </div>
                                <p>
                                    <span>: <a href="mailto:developerneelesh@gmail.com" className="email">developerneelesh@gmail.com</a> </span>
                                </p>
                            </div>
                            <div className="contact-item">
                                <div className="icon">
                                   <FaUserGraduate />
                                    <span>Education</span>
                                </div>
                                <p>
                                    <span>: B Tech RGPV University, Bhopal (M.P)</span>
                                </p>
                            </div>
                            <div className="contact-item">
                                <div className="icon">
                                    <FaMobile />
                                    <span>Mobile Number</span>
                                </div>
                                <p>
                                    <span>: <a href="tel:+916260271321" className="email">+91 6260271321</a> </span>
                                </p>
                            </div>
                            <div className="contact-item">
                                <div className="icon">
                                    <FaGlobeAfrica />
                                    <span>Languages</span>
                                </div>
                                <p>
                                    <span>: English, Hindi</span>
                                </p>
                            </div>
                        </div>
                        <div className="contact-icons">
                            <div className="contact-icon">
                                <a href="www.facebook.com" target="_blank">
                                    <FaFacebookSquare />
                                </a>
                                <a href="#" target="_blank">
                                    <FaTwitterSquare />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="right-contact">
                        <form action="" className="contact-form" onSubmit={handleSubmit}>
                            <div className="input-control">
                                <input 
                                type="text" 
                                placeholder="Enter your name"
                                name="name"
                                value={onInput.name}
                                onChange={handleChange} 
                                />
                                {<p className="error-message">{errors.name}</p>}
                            </div>
                            <div className="input-control">
                                <input 
                                    type="email" 
                                    name="email"
                                    placeholder="Enter your email"
                                    value={onInput.email}
                                    onChange={handleChange} 
                                    />
                                    {<p className="error-message">{errors.email}</p>}
                            </div>
                            <div className="input-control">
                                <input 
                                type="text" 
                                name="subject"
                                placeholder="Enter your subject"
                                value={onInput.subject}
                                onChange={handleChange} 
                                />
                                {<p className="error-message">{errors.subject}</p>}
                            </div>
                            <div className="input-control">
                                <textarea 
                                name="content" 
                                id="" 
                                cols="15" 
                                rows="8" 
                                placeholder="Enter your text here..."
                                onChange={handleChange}
                                defaultValue={onInput.content}
                                ></textarea>
                                {<p className="error-message">{errors.content}</p>}
                            </div>
                            <div className="submit-btn">
                                <button className="main-btn" type="submit">
                                    <span className="btn-text">Submit</span>
                                    <span className="btn-icon"><FaArrowRight /></span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}