import React from 'react';
import Footer from './Footer';
import Header from './Header';

export default function Home() {
    return (
        <div className='portContent'>
            <Header Title={"About Me"}/>
            <div>
                <div>
                    <p>profile pic here</p>
                </div>
                <div className='aboutPara'>
                    <h3>Career path</h3>
                    <p>
                        I started out my programming journey during my 2nd year at college when I attended a programming intro course. 
                        After talking to my advisor about changing majors I was informed that it would be 3 more years of college.
                        I knew if I wanted to pursue college again, I would need to save up more money. So I took time off to work. 
                        During my time working I discovered that programming and web development jobs didn't always have strict degree requirments. 
                        So,after looking into my options, I decided to attend General Assemblys programming immersive course. During my time there I learned many of
                        the vital skills required to be a junior web developer, of which my favorite was the MERN stack. Post graduating, I focused on applying and searching for a professional position, of which I
                        eventually found as a contractor for Bear Logistic Solutuons. The position used the Zoho Anylitics, Zoho Creater, Microsoft Power Apps, SQL, and many other rappid development tools.
                        After 6 months of work my contract was no linger needed, so now I am improving my portfolio and searching for work once again.
                    </p>
                </div>
                <div className='aboutPara'>
                    <h3>Passions</h3>
                    <p>
                        My passions are pretty much all in tech, friends, and music. I find video games to be relaxing and as a great way to connect with friends accross the U.S.
                        As for my taste in music, I am a huge fan of alternative, rock, and even jpop.
                    </p>
                </div>
                <div className='aboutPara'>
                    <h3>Goals</h3>
                    <p>
                        My biggest goal is indapendance from my parents, especially as I am currently renting a space from them. So getting my own place after a job is of my highest priority.
                        Otherwise I would say saving money would be my biggest goal.

                    </p>
                </div>

            </div>
                
            <Footer />
        </div>
    );
}
