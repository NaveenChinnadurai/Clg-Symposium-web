import React from 'react'
import '../../stylings/compoStyle/homeStyles/aboutEvents.css'
import poster from '../../assets/poster.png'
function AboutEvents() {
    return (
        <div className="about-event" data-aos="fade-in" data-aos-offset="0">
            <h2>Welcome to SAரYU-2k23</h2>
            <div className="row about-event-content">
                <div className="about-txt">
                    <p>New beginnings, new friendships, and new horizons – all begin with a warm welcome to you. Delve into the heart of college life by signing up for our upcoming events.</p>
                    <p>Discover a realm of intellect and innovation at our college's symposium event. Engage with visionary speakers, cutting-edge research, and vibrant discussions that span across various disciplines. Join us for a day that celebrates curiosity and fosters insightful dialogues, inspiring the next generation of thought leaders.</p>
                </div>
                <div className="about-img"></div>
            </div>
            <div className="col poster-img-div">
                <h2>SYMPOSIUM POSTER</h2>
                <img src={poster} alt="Poster-img" className='poster-img' />
            </div>
        </div>
    )
}

export default AboutEvents