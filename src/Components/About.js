import {FaDownload} from "react-icons/fa"
export default function About(){
    return(
        <>
        <section className="container about" id="about">
            <div className="main-title">
                <h2>About <span>me</span><span className="bg-text">my stats</span></h2>
            </div>
            <div className="about-container">
                <div className="left-about">
                    <h1 className="name">
                    👋 Hi, I'm <span>Neelesh Sahu.</span>
                    </h1>
                    <p>
                    I'm a passionate software developer with a love for crafting elegant code and solving complex problems. With 5 years of experience in the software development industry, I've had the privilege of working on a wide range of projects, from web applications and Ecommerce site to backend systems and everything in between.
                    </p>
                    <h1>🚀 My Mission:</h1>
                    <p>My mission is to create software that not only meets the highest standards of quality but also exceeds the expectations of clients and end-users. I'm dedicated to continuously improving my skills and staying up-to-date with the latest technologies to ensure that I deliver the best solutions possible.</p>
                    <h1>💻 Expertise:</h1>
                    <p>I specialize in Shopify, Wordpress, wix & PHP and have a deep understanding of Godaddy, Hostinger and NameCheap. I'm also skilled in React and NodeJs.</p>
                    <h1>🌟 What Sets Me Apart:</h1>
                    <p>What sets me apart as a developer is my commitment to clean, maintainable code and my ability to communicate technical concepts in a clear and understandable way. I'm not just a coder; I'm a problem solver who can bridge the gap between technology and the people who use it.</p>
                    <h1>📚 Lifelong Learner:</h1>
                    <p>In the world of software development, continuous learning is essential. I'm constantly exploring new technologies, attending conferences, and reading about industry trends to ensure I stay at the forefront of my field.</p>
                    <h1>🌍 Let's Connect:</h1>
                    <p>
                    I'm always open to new opportunities, collaboration, and interesting projects. If you'd like to work together or just have a chat, feel free to get in touch. You can reach me at <a href="mailto:developerneelesh@gmail.com" className="email">developerneelesh@gmail.com</a> or connect with me on <a href="https://www.linkedin.com/in/neelesh-sahu-97b2aa20b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="linkdin">LinkedIn</a>.
                    </p>
                    <p>Thanks for stopping by, and I look forward to connecting with you!</p>
                    {/* <div className="btn-con">
                        <a href="#" className="main-btn">
                            <span className="btn-text">Download CV</span>
                            <span className="btn-icon"><FaDownload /></span>
                        </a>
                    </div> */}
                </div>
                {/* <div className="right-about">
                    <div className="about-item">
                        <div className="abt-text">
                            <p className="large-text">650+</p>
                            <p className="small-text">Projects <br /> Completed</p>
                        </div>
                    </div>
                    <div className="about-item">
                        <div className="abt-text">
                            <p className="large-text">10+</p>
                            <p className="small-text">Years of <br /> experience</p>
                        </div>
                    </div>
                    <div className="about-item">
                        <div className="abt-text">
                            <p className="large-text">300+</p>
                            <p className="small-text">Happy <br /> Clients</p>
                        </div>
                    </div>
                    <div className="about-item">
                        <div className="abt-text">
                            <p className="large-text">400+</p>
                            <p className="small-text">Customer <br /> reviews</p>
                        </div>
                    </div>
                </div> */}
            </div>
            <div className="about-stats">
                <h4 className="stat-title">My Skills</h4>
                <div className="progress-bars">
                    <div className="progress-bar">
                        <p className="prog-title">HTML5</p>
                        <div className="progress-con">
                            <p className="prog-text">95%</p>
                            <div className="progress">
                                <span className="html"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">CSS3</p>
                        <div className="progress-con">
                            <p className="prog-text">90%</p>
                            <div className="progress">
                                <span className="css"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">SHOPIFY</p>
                        <div className="progress-con">
                            <p className="prog-text">80%</p>
                            <div className="progress">
                                <span className="css"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">WORDPRESS</p>
                        <div className="progress-con">
                            <p className="prog-text">80%</p>
                            <div className="progress">
                                <span className="css"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">LIQUID</p>
                        <div className="progress-con">
                            <p className="prog-text">80%</p>
                            <div className="progress">
                                <span className="css"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">PHP</p>
                        <div className="progress-con">
                            <p className="prog-text">45%</p>
                            <div className="progress">
                                <span className="css"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">JAVASCRIPT</p>
                        <div className="progress-con">
                            <p className="prog-text">75%</p>
                            <div className="progress">
                                <span className="js"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">ReactJS</p>
                        <div className="progress-con">
                            <p className="prog-text">75%</p>
                            <div className="progress">
                                <span className="react"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">NodeJS</p>
                        <div className="progress-con">
                            <p className="prog-text">45%</p>
                            <div className="progress">
                                <span className="node"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">Bootstrap</p>
                        <div className="progress-con">
                            <p className="prog-text">70%</p>
                            <div className="progress">
                                <span className="python"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}