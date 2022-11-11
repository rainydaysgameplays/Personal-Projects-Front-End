import React from 'react';
import Footer from './Footer';
import Header from './Header';
import PDF from './PortfolioAssets/resume.pdf'

export default function Resume() {
    return (
        <div className='portContent'>
            <Header Title={"Resume"}/>
            
            <a href="/static/media/resume.33777f6fc44f54609dde.pdf" download>Download Resume</a>
            <Footer />
        </div>
    );
}
