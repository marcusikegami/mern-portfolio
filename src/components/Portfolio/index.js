import React from "react";

function Portfolio() {
 const projects = [
     {
        name: 'Deep Thoughts',
        description: 'A MongoDB social media site build with React. Create an account with a phony email and post a thought of your own!',
        github: 'https://github.com/marcusikegami/deep-thoughts',
        livelink: 'https://sheltered-garden-29890.herokuapp.com/',
        image: '1',
        uses: 'React, React DOM, Apollo Server Express.js, Mongoose, GraphQL'
     },
     {
        name: 'BreakRoom Blogsite',
        description: 'blogsite web-application that allows users to: Create an account, Make/Edit/Delete posts, comment on posts, view their post profile, and login/logout from the site. Its structured using RESTful API guidelines and makes use of the browsers fetch() API. ',
        github: 'https://github.com/marcusikegami/breakroom-blogsite',
        livelink: 'https://arcane-spire-94418.herokuapp.com/',
        image: '2',
        uses: 'Bcrypt, MySQL2, Sequelize, Handlebars.js, node.js'
     },
     {
        name: 'Book Search Engine',
        description: "Fully functional book search engine that uses Google's Book API to search for books using a search query. The back end was originally set up following RESTful API construction but altered to utilize ApolloServer/Client/GraphQL to allow a user to create an account and save/delete books.",
        github: 'https://github.com/marcusikegami/book-search-engine',
        livelink: 'https://cryptic-shelf-81985.herokuapp.com/',
        image: '3',
        uses: 'Mongoose, ApolloServer/Client, GraphQL, React.js/Redux,'
     },
     {
        name: 'Phone Number Capture Using JavaScript Regular Expressions',
        description: 'Demonstration of my ability to notate and describe code: This tutorial describes how to match and return the digits from various phone number formats using JavaScript Regular Expression syntax.',
        github: 'https://gist.github.com/marcusikegami/04d1f6cbca7a8a1db8e3b5fc8e46dcf7',
        livelink: 'https://gist.github.com/marcusikegami/04d1f6cbca7a8a1db8e3b5fc8e46dcf7',
        image: '4',
        uses: 'Javascript, JS Regular Expressions'
     },
     {
        name: 'MongoDB Social Network API ',
        description: 'This project encompasses a rudimentary NoSQL database that utilizes the browsers Fetch API. It uses MongoDB and Mongoose as its ORM. This database is centered around the format of a social network plugin which allows users to create an ID, share thoughts, react to others thoughts, add to/create a friends list.',
        github: 'https://github.com/marcusikegami/mongodb-social-network-API',
        livelink: 'https://www.youtube.com/watch?v=X4gDWpk4yQ4',
        image: '5',
        uses: 'MongoDB, Mongoose, Fetch API'
     },
     {
        name: 'E-Commerce Backend Mockup',
        description: 'This program is a demonstration of a basic website server that enables database manipulation using npm dotenv, express.js, mysql2, and sequelize. This program was designed using RESTful API design and will serve as a proof of knowledge on my personal portfolio.',
        github: 'https://github.com/marcusikegami/e-commerce-backend-mockup',
        livelink: 'https://www.youtube.com/watch?v=nFnQ9gipjks&t=70s&ab_channel=mikegami.github',
        image: '6',
        uses: 'Express.js, MySQL2, Sequelize, .ENV'
     },
 ];

 return (
     <div>
    {projects.map((project) => {
        return(
                <div className="col-12 mb-2 bg-dark text-light p-3">
                  <div className="flex-row">
                    <div className="left col-8">
                        <h3 className="portfolio-item-title text-light">{project.name}</h3>
                        <h5 className="portfolio-languages">
                            Built With: {project.uses}
                        </h5>
                        <p>{project.description}</p>
                        
                        <a href={project.livelink}  rel="noreferrer noopener" target="_blank">
                            <img className="icon" src={require('../../assets/open-in-browser.png')} alt="hosted app / youtube link"/>
                        </a>
                        <a href={project.github} rel="noreferrer noopener" target="_blank">
                            <img className="icon" src={require('../../assets/github.png')} alt="github link"/>
                        </a>
                    </div>
                    <div className="col-4 right">
                        <img className="image" src={require(`../../assets/images/${project.image}.png`)} alt={project.name} key={project.name}/>
                    </div>
                  </div>
                </div>
        );
    })
    
    }
 </div>);
}

export default Portfolio;