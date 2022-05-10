import React from "react";

function About() {
 return (
    <section className="my-3" id="portfolio">
      
      
      <div className="flex-row justify-space-between">
      <a  href="https://docs.google.com/document/d/1FQh9yajEJq-egtX-1eg_8DY-Hx_iiIdqqcRKJ1nygRA/edit?usp=sharing" target="_blank" rel="noopener noreferrer" >
                <h5 id="resume" className="text-dark bg-primary p-2 display-inline-block">Resume on Google Docs <img src={require('../../assets/exit-top-right.png')} alt="Link to resume"/> </h5>
            </a>
          <div className="col-12 mb-2 bg-dark text-light p-3">
            <div className="flex-row">
                <div className="col-3 about">
                    <img className="avatar" src={require('../../assets/images/avatar.jpg')} alt="Marcus Ikegami"/>
                </div>
                <div className="col-9 about">
                    <p className="about">Web developer trained by the University of Utah in full-stack web technologies such as JavaScript, React, Node.js, Express.js, MongoDB and MySQL. Passionate about learning and growth in the field of web development and working with others to create in-demand web applications. Strong desire to learn how things work and find enjoyment learning computer science fundamentals. My skills using modern, in-demand web technologies combined with curiosity and desire to grow with the industry make me a strong addition to any development team.
                        Please contact me via the provided information to set up an interview.
                    </p>
                </div>
            </div>
          </div>
          
            <div className="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
                <h3 className="br bg-primary portfolio-item-title text-dark p-2">Front-end Proficiencies</h3>
                <ul>
                    <li>JavaScript – HTML – CSS</li>
                    <li>React – Redux – MVC Architecture</li>
                    <li>Progressive Web Application Design, Agile Development, DRY principle</li>
                    <li>Object-oriented design</li>
                    <li>Bootstrap – Can easily learn other CSS libraries</li>
                    <li>UI/UX testing</li>
                </ul>
                <p>I enjoy creating responsive web applications and fine tuning them to meet the greater vision in my mind. Working with the UI/UX I am able to channel express creativity while finding unique solutions to problems/limitations of my designs.</p>
            </div> 
            <div className="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
                <h3 className="br bg-primary portfolio-item-title text-dark p-2">Back-end Proficiencies</h3>
                <ul>
                    <li>Node.js – Express.js</li>
                    <li>Apollo Server – GraphQL</li>
                    <li>RESTful API design</li>
                    <li>MySQL2 – Sequelize</li>
                    <li>NoSql – MongoDB – Mongoose</li>
                    <li>Writing unit tests to ensure application function and database structure</li>
                </ul>
                
                <p>I find working with servers, databases, and APIs to be very rewarding and exciting. I am confident working with the tools listed above to create efficient and industry-standard databases and also my ability to quickly learn new backend tools to meet the requirements of a job.</p>
            </div>      
            
            <h2 className="text-dark bg-primary p-2 display-inline-block mb-3 mt-2">Contact Me</h2>
          <div className="col-12 mb-2 bg-dark text-light p-3">
           
                <div className="col-9 about">
                    <ul>
                        <li>Email: <img src={require('../../assets/exit-top-right.png')} alt="Link to open default email program"/> <a className="style-none" href="mailto:hikegami.6@gmail.com">hikegami.6@gmail.com</a></li>
                        <li>Cellphone - Text/Call: (801)598-6965</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
 );
}

export default About;