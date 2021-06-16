import * as React from 'react';

import { Logo } from '../Navigation/Logo';
import { NavigationLink } from '../Navigation/NavigationLink';
import { Button } from '../Button/Button';
import Selfie from '../../../static/img/self.jpg';
import Branding from '../../../static/img/branding.png';
import Artis from '../../../static/img/artis-new.png';
import Ignite from '../../../static/img/ignite.png';

export class Application extends React.Component {
    render() {
        return (
            <div className="application-container">
                <div className="header">
                    <div className="navigation">
                        <Logo/>
                        <ul type="1" className="navigation-links">
                            <NavigationLink text={<React.Fragment><span className="number">00.</span> about</React.Fragment>} link='#about'/>
                            <NavigationLink text={<React.Fragment><span className="number">01.</span> projects</React.Fragment>} link='#projects'/>
                            <NavigationLink text={<React.Fragment><span className="number">02.</span> contact</React.Fragment>} link='#contact'/>
                            <Button text="resume" link="/resume.pdf"/>
                        </ul>
                    </div>
                </div>
                <div className="content">
                    <section id="hero">
                        <h3>Hi, my name is</h3>
                        <h1>Dakarai Cundiff.</h1>
                        <h2>Let me build your next big project.</h2>
                        <p>I'm a software engineer based in Bloomington, IN, specializing in the development of exceptional desktop and web solutions.</p>
                        <Button text="get in touch" link="mailto:dakaraicundiff@gmail.com"/>
                    </section>
                    <section id="about">
                        <div className="title">
                            <h2><span className="number">00.</span> About Me</h2>
                            <div className="line"></div>
                        </div>
                        <div id="about-content">
                            <div className="info">
                                <p>
                                    I'm a software engineer based in Bloomington, Indiana. I specialize in developing innovative, efficient and cutting-edge backend software systems, 
                                    while also building innovative and modern frontend web pages.
                                    <br/>
                                    <br/>
                                    I currently attend Indiana University - Bloomington, where I am pursuing a Bachelor's Degree in Computer Science with a specialization in Software Engineering and a minor in 
                                    Game Development.
                                    <br/>
                                    <br/>
                                    Here are some of the technologies I am most familiar with:
                                </p>
                                <ul>
                                    <li>C# (.NET)</li>
                                    <li>Java</li>
                                    <li>HTML</li>
                                    <li>Javascript</li>
                                    <li>CSS & SASS</li>
                                    <li>PHP</li>
                                    <li>MySQL</li>
                                    <li>ReactJS</li>
                                    <li>NodeJS</li>
                                </ul>
                            </div>
                            <div className="picture-container">
                                <img className="picture" src={Selfie}></img>
                                <span className="picture-border"></span>
                            </div>
                        </div>
                    </section>
                    <section id="projects" className="center-title">
                        <div className="title">
                            <h2><span className="number">01.</span> Some of My Projects</h2>
                            <div className="line"></div>
                        </div>
                        <div className="project">
                            <div className="preview-container"><img className="preview" src={Artis}></img></div>
                            <div className="info">
                                <h3>Featured Project</h3>
                                <h2 className="name">Artis - June, 2021</h2>
                                <p className="description">
                                    Artis is a web application that helps artists showcase 
                                    and centralize their content from everywhere, in one place.
                                    <br/>
                                    <br/>
                                    This project was extensively developed over the span of a year.
                                    <br/>
                                    <br/>
                                    <a href="https://artis.community" target="_"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 194.818 194.818"><title>External</title><g><path d="M185.818,2.161h-57.04c-4.971,0-9,4.029-9,9s4.029,9,9,9h35.312l-86.3,86.3c-3.515,3.515-3.515,9.213,0,12.728 c1.758,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636l86.3-86.3v35.313c0,4.971,4.029,9,9,9s9-4.029,9-9v-57.04 C194.818,6.19,190.789,2.161,185.818,2.161z"></path><path d="M149,77.201c-4.971,0-9,4.029-9,9v88.456H18v-122h93.778c4.971,0,9-4.029,9-9s-4.029-9-9-9H9c-4.971,0-9,4.029-9,9v140 c0,4.971,4.029,9,9,9h140c4.971,0,9-4.029,9-9V86.201C158,81.23,153.971,77.201,149,77.201z"></path></g></svg></a>
                                </p>
                            </div>
                        </div>
                        <div className="project">
                            <div className="preview-container"><img className="preview" src={Ignite}></img></div>
                            <div className="info">
                                <h3>Featured Project</h3>
                                <h2 className="name">Ignite - July, 2020</h2>
                                <p className="description">
                                    An MMORPG server emulator capable of serving 
                                    data to hundreds of game clients concurrently.
                                    <br/>
                                    <br/>
                                    The engineering team, led by me, gained plenty of experience in 
                                    networking & packet handling, debugging, and collaboration.
                                    <br/>
                                    <br/>
                                    This project was developed and actively maintained for over 2 years.
                                </p>
                            </div>
                        </div>
                        <div className="project">
                            <div className="preview-container"><img className="preview" src={Branding}></img></div>
                            <div className="info">
                                <h2 className="name">Branding - April, 2020</h2>
                                <p className="description">
                                    A dark, minimal, single-page website to highlight 
                                    my skills and to create a lasting and meaningful 
                                    impression on potential clients.
                                    <br/>
                                    <br/>
                                    This project was completed in approximately two days, utilizing ReactJS primarily.
                                    <br/>
                                    <br/>
                                    <a href="https://github.com/dakaraic/dotcom" target="_"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 438.549 438.549"><title>GitHub</title><path d="M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365 c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63 c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996 c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136 c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559 c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559 c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997 c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851 c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136 c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41 c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126 c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817 c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994 c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849 c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24 c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979 c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146 c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995 c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906 C438.536,184.851,428.728,148.168,409.132,114.573z"></path></svg></a>
                                    <a href="/" target="_"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 194.818 194.818"><title>External</title><g><path d="M185.818,2.161h-57.04c-4.971,0-9,4.029-9,9s4.029,9,9,9h35.312l-86.3,86.3c-3.515,3.515-3.515,9.213,0,12.728 c1.758,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636l86.3-86.3v35.313c0,4.971,4.029,9,9,9s9-4.029,9-9v-57.04 C194.818,6.19,190.789,2.161,185.818,2.161z"></path><path d="M149,77.201c-4.971,0-9,4.029-9,9v88.456H18v-122h93.778c4.971,0,9-4.029,9-9s-4.029-9-9-9H9c-4.971,0-9,4.029-9,9v140 c0,4.971,4.029,9,9,9h140c4.971,0,9-4.029,9-9V86.201C158,81.23,153.971,77.201,149,77.201z"></path></g></svg></a>
                                </p>
                            </div>
                        </div>
                    </section>
                    <section id="contact" className="center">
                        <div className="title">
                            <h2><span className="number">02.</span> What's Next?</h2>
                        </div>
                        <div id="contact-content">
                            <h1>Get In Touch.</h1>
                            <p>I'm always looking for new freelance opportunities. Feel free to drop me an email so that we can work together to maximize your business.</p>
                            <Button text="contact me" link="mailto:dakaraicundiff@gmail.com"/>
                        </div>
                    </section>
                </div>
                <div className="social-side">
                    <ul>
                        <li>
                            <a href="https://github.com/dakaraic" target="_">
                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 438.549 438.549"><title>GitHub</title><path d="M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365 c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63 c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996 c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136 c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559 c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559 c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997 c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851 c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136 c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41 c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126 c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817 c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994 c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849 c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24 c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979 c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146 c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995 c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906 C438.536,184.851,428.728,148.168,409.132,114.573z"></path></svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/dakari-cundiff/" target="_">
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 430.117 430.117"><title>LinkedIn</title><path d="M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707 c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21 v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824 C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463 c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z M5.477,420.56h92.184v-277.32H5.477V420.56z"></path></svg>                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com/dakaraic" target="_">
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 512 512"><title>Instagram</title><g><g><path d="M352,0H160C71.648,0,0,71.648,0,160v192c0,88.352,71.648,160,160,160h192c88.352,0,160-71.648,160-160V160 C512,71.648,440.352,0,352,0z M464,352c0,61.76-50.24,112-112,112H160c-61.76,0-112-50.24-112-112V160C48,98.24,98.24,48,160,48 h192c61.76,0,112,50.24,112,112V352z"></path></g></g><g><g><path d="M256,128c-70.688,0-128,57.312-128,128s57.312,128,128,128s128-57.312,128-128S326.688,128,256,128z M256,336 c-44.096,0-80-35.904-80-80c0-44.128,35.904-80,80-80s80,35.872,80,80C336,300.096,300.096,336,256,336z"></path></g></g><g><g><circle cx="393.6" cy="118.4" r="17.056"></circle></g></g></svg>                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/dakvrai" target="_">
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 612 612"><title>Twitter</title><path d="M612,116.258c-22.525,9.981-46.694,16.75-72.088,19.772c25.929-15.527,45.777-40.155,55.184-69.411 c-24.322,14.379-51.169,24.82-79.775,30.48c-22.907-24.437-55.49-39.658-91.63-39.658c-69.334,0-125.551,56.217-125.551,125.513 c0,9.828,1.109,19.427,3.251,28.606C197.065,206.32,104.556,156.337,42.641,80.386c-10.823,18.51-16.98,40.078-16.98,63.101 c0,43.559,22.181,81.993,55.835,104.479c-20.575-0.688-39.926-6.348-56.867-15.756v1.568c0,60.806,43.291,111.554,100.693,123.104 c-10.517,2.83-21.607,4.398-33.08,4.398c-8.107,0-15.947-0.803-23.634-2.333c15.985,49.907,62.336,86.199,117.253,87.194 c-42.947,33.654-97.099,53.655-155.916,53.655c-10.134,0-20.116-0.612-29.944-1.721c55.567,35.681,121.536,56.485,192.438,56.485 c230.948,0,357.188-191.291,357.188-357.188l-0.421-16.253C573.872,163.526,595.211,141.422,612,116.258z"></path></svg>                            </a>
                        </li>
                    </ul>
                    <span className="line"></span>
                </div>
                <div className="email-side">
                    <a href="mailto:dakaraicundiff@gmail.com">dakaraicundiff@gmail.com</a>
                    <span className="line"></span>
                </div>
            </div>
        )
    }
}