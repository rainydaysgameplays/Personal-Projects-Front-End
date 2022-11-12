import React from 'react';
import Footer from './Footer';
import Header from './Header';
import resumePdf from './PortfolioAssets/resume.pdf'
import resumeJpg from './PortfolioAssets/resume.jpg'
console.log(resumePdf)
console.log(resumeJpg)

export default function Resume() {
    return (
        <div className='portContent'>
            <Header Title={"Resume"}/>
            <div id='resumeContent'>
                <div id='resumeLinks'>
                    <a href="/static/media/resume.33777f6fc44f54609dde.pdf" download><button id='downloadBtn'>Download Resume</button></a>
                </div>
                <img src="/static/media/resume.6673f1fb5c84a730883f.jpg" alt="resume img" id='resumeJpg'/>

            </div>

            <Footer />
        </div>
    );
}
