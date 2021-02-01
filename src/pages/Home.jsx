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
            <ReactTypingEffect className="typingeffect" text={['I am Hassan Kazeem Destiny','I am a software developer']} speed={10} eraseDelay={500}/>
            <Social/>
            </div>           
        )
    }
}

export default Home