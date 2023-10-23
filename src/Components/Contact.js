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
        return errors;
    }
    const handleChange =(e) =>{
        setInput({...onInput, [e.target.name]:e.target.value});
        console.log(validateValues(onInput));
    }
    const handleSubmit =(e) =>{
        e.preventDefault();
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
                        <h4>Contact me here</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            In, laborum numquam? Quam excepturi perspiciatis quas quasi.
                        </p>
                        <div className="contact-info">
                            <div className="contact-item">
                                <div className="icon">
                                    <FaMapMarkedAlt />
                                    <span>Location</span>
                                </div>
                                <p>
                                    : London, united Kingdom
                                </p>
                            </div>
                            <div className="contact-item">
                                <div className="icon">
                                    <FaEnvelopeOpen />
                                    <span>Email</span>
                                </div>
                                <p>
                                    <span>: maclinzuniversal@gmail.com</span>
                                </p>
                            </div>
                            <div className="contact-item">
                                <div className="icon">
                                   <FaUserGraduate />
                                    <span>Education</span>
                                </div>
                                <p>
                                    <span>: Sussex University, East Sussex</span>
                                </p>
                            </div>
                            <div className="contact-item">
                                <div className="icon">
                                    <FaMobile />
                                    <span>Mobile Number</span>
                                </div>
                                <p>
                                    <span>: 07522670617</span>
                                </p>
                            </div>
                            <div className="contact-item">
                                <div className="icon">
                                    <FaGlobeAfrica />
                                    <span>Languages</span>
                                </div>
                                <p>
                                    <span>: Afrikaans, English, Spanish</span>
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
                            <div className="input-control i-c-2">
                                <input 
                                type="text" 
                                placeholder="Enter your name"
                                name="name"
                                value={onInput.name}
                                onChange={handleChange} 
                                />
                                <input 
                                type="email" 
                                name="email"
                                placeholder="Enter your email"
                                value={onInput.email}
                                onChange={handleChange} 
                                />
                            </div>
                            <div className="input-control">
                                <input 
                                type="text" 
                                name="subject"
                                placeholder="Enter your subject"
                                value={onInput.subject}
                                onChange={handleChange} 
                                />
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