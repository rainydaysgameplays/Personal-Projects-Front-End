import React from 'react';
import Footer from './Footer';
import Header from './Header';
import resumePdf from './PortfolioAssets/resume.pdf'
import resumeJpg from './PortfolioAssets/resume.jpg'



export default function Resume() {
    return (
        <div className='portContent'>
            <Header Title={"Resume"}/>
            <div id='resumeContent'>
                <div id='resumeLinks'>
                    <a id='resumeBtnLnk' href={resumePdf} download><button id='downloadBtn'>Download Resume</button></a>
                </div>
                <img src={resumeJpg} alt="resume img" id='resumeJpg'/>
            </div>

            <Footer />
        </div>
    );
}
