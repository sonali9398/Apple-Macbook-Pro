import React, { useEffect, useRef } from "react";
import title from '../../apple-macbook_public/public/title.png'
import hero from '../../apple-macbook_public/public/videos/hero.mp4'
// import {useRef} from react;

function Hero(){
    const videoRef = useRef();

    useEffect(()=>{
        if(videoRef.current) videoRef.current.playbackRate = 2
    },[]);

    return(
        <section id="hero">
            <div>
                <h1>MacBook Pro</h1>
                <img src={title} alt='title'/>

            </div>

            <video ref={videoRef} src={hero} autoPlay muted playsInline/>

            <button>Buy</button>

            <p>From $1599 or $133/mo for 12 months</p>

        </section>
    )
}

export default Hero