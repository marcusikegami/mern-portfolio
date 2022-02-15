import React from "react";

function About() {
 return (
    <section className="my-3" id="portfolio">
      
      
      <div className="flex-row justify-space-between">
      
          <div className="col-12 mb-2 bg-dark text-light p-3">
            <div className="flex-row">
                <div className="col-3 about">
                    <img className="avatar" src={require('../../assets/images/avatar.jpg')} alt="Marcus Ikegami"/>
                </div>
                <div className="col-9 about">
                    <p className="about">I am a capable web-developer with many applications that use technologies like MongoDB, Express.js, React.js and Node.js among other code libraries. I will receive my certificate in Full-Stack Web Development from Trilogy Education Services on February 23rd, 2022. 
                        I find programming to be the most interesting and rewarding thing I have ever studied. I am looking to begin a career in the field of Web Development with anticipation and excitement.
                        Please contact me via the provided information to set up an interview.
                    </p>
                </div>
            </div>
          </div>
          
            <div className="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
                <h3 className="portfolio-item-title text-light">Front-end Proficiencies</h3>
                <ul>
                    <li>JavaScript // HTML // CSS</li>
                    <li>React // Redux // MVC Architecture</li>
                    <li>Progressive Web Application Design, Agile Development, DRY principle</li>
                    <li>Object-oriented design</li>
                    <li>Git</li>
                    <li>Bootstrap // Can easily learn other CSS libraries</li>
                    <li>UI/UX testing</li>
                </ul>
                <p>I enjoy creating responsive web applications and fine tuning them to meet the greater vision in my mind. Working with the UI/UX I am able to channel express creativity while finding unique solutions to problems/limitations of my designs.</p>
            </div> 
            <div className="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
                <h3 className="portfolio-item-title text-light">Back-end Proficiencies</h3>
                <ul>
                    <li>Node.js // Express.js</li>
                    <li>Apollo Server // GraphQL</li>
                    <li>RESTful API design</li>
                    <li>MySQL2 // Sequelize</li>
                    <li>NoSql // MongoDB // Mongoose</li>
                    <li>Writing unit tests to ensure application function and database structure</li>
                </ul>
                <br/>
                <p>I find working with servers, databases, and APIs to be very rewarding and exciting. I am looking to expand my knowledge/expertise in this area to enhance my full-stack programming capability.</p>
            </div>      
            <a  href="https://docs.google.com/document/d/1FQh9yajEJq-egtX-1eg_8DY-Hx_iiIdqqcRKJ1nygRA/edit?usp=sharing" rel="noopener noreferrer" >
                <h5 id="resume" className="text-dark bg-primary p-2 display-inline-block">Resume on Google Docs <img src={require('../../assets/exit-top-right.png')} alt="Link to resume"/> </h5>
            </a>
        </div>
    </section>
 );
}

export default About;