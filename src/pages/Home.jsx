import React, { Component } from 'react';
import pic from '../Img/pic06.jpg';
import ReactTypingEffect from 'react-typing-effect';
import Social from '../Content/Social';
import Confetti from 'react-confetti';
class Home extends Component {
    render () {
        return (
            <div className="condiv home">
                <Confetti />
            <img src={pic} alt="ProfilePic" className="profilepic"></img>
            <ReactTypingEffect className="typingeffect" text={['My name is Kazeem Hassan Destiny','Microsoft Certified Software Engineer','Graduate of Computer Science, Bells University of Technology, Ota, Ogun State, Nigeria', 'I am currently working on Intelligent Stock Mangement Service using Python-Django']} speed={10} eraseDelay={500}/>
            <Social/>
            </div>           
        )
    }
}

export default Home