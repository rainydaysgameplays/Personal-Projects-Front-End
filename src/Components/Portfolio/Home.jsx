import React from 'react';
import Footer from './Footer';
import Header from './Header';

export default function Home() {
    return (
        <div className='portContent'>
            <Header Title={"About Me"}/>
                <p>About Me</p>
            <Footer />
        </div>
    );
}
