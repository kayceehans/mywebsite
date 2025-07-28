import React, { Component } from 'react'
import pic from '../Img/PassPic.png';

class About extends Component {
    render () {
        return (
            <div className="condiv">
                <h1 className="subtopic">About Me</h1>
                <img src={pic} alt="ProfilePic" className="profilepic"></img>           
            <h4>Hey there,</h4>
            <h1>I'm Hassan Kazeem Destiny</h1>
            <h3>Full Stack Web <u>Developer</u> | A-I <u>Enthausists</u></h3>
            <br></br>
            <p>As a seasoned software engineer with a lifelong passion for technology, I've been driven by an insatiable curiosity and enthusiasm for innovation. 
              My journey in the world of computers began at a young age, with humble beginnings in laptop repairs during the Windows 98 era. 
              This early exposure sparked a deep interest in software development, which I further cultivated through my academic pursuits in Software Engineering.
            </p>
            <p>
              Throughout my career, I've maintained a strong focus on software development, with a particular emphasis on mobile and web technologies. 
              I'm drawn to the versatility and reach of cross-platform development, which enables me to deploy applications seamlessly across multiple platforms from a single codebase. 
              Technologies like JavaScript and .NET Core have been instrumental in helping me achieve this goal.
            </p>
            <p>
              One of my most notable projects was the development of an Intelligent Stock Management Service, which leveraged artificial intelligence to optimize inventory management and forecasting. 
              This project not only showcased the potential of AI in transforming business operations but also deepened my understanding of the complex interplay between technology and business.
            </p>
            </div>
        )
    }
}

export default About