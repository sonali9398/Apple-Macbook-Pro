import React from 'react'
import video from '../../apple-macbook_public/public/videos/game.mp4'
import showImg from '../../apple-macbook_public/public/mask-logo.svg'
import {useMediaQuery} from 'react-responsive'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'

const Showcase = () => {
  const isTablet = useMediaQuery({ query : '(max-width:1024px)'});

  useGSAP(()=>{
    if(!isTablet){
      const timeline = gsap.timeline({
        scrollTrigger:{
          trigger:'#showcase',
          start:'top top',
          end:'bottom top',
          scrub:true,
          pin:true
        }
      })
      timeline.to('.mask img',{
        transform:'scale(1.1)'
      }).to('.content', {opacity:1, y:0, ease:'power1.in'})
    }
  },[isTablet]);

  gsap.fromTo(
    "#textBlock",
    { scale: 1, transformOrigin: "center center" },
    {
      scale: 1.25,
      scrollTrigger: {
        trigger: "#textBlock",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
      ease: "power2.inOut",
    }
  );


  return (
    <section id='showcase' className="w-screen overflow-hidden relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw]">
      <div className='media'>
        <video src={video} loop muted  autoPlay playsInline/>
        <div className='mask'>
            <img src={showImg}/>
        </div>
      </div>
      <div className='content'>
        <div className='wrapper  w-full flex justify-between items-start px-10 lg:px-20' >
            <div className="lg:max-w-md origin-center" id="textBlock">
              <h2>Rocket Chip</h2>

              <div className="space-y-5 mt-7 pe-10">
                <p>
                  Introducing{" "}
                  <span className="text-white">
                    M4, the next generation of Apple silicon
                  </span>
                  .M4 powers
                </p>
                <p>
                  It drives Apple Intelligence on iPad Pro, so you can write, create, and
                  accomplish more with ease. All in a design that’s unbelievably thin,
                  light, and powerful.
                </p>
                <p>
                  A brand-new display engine delivers breathtaking precision, color
                  accuracy, and brightness. And a next-gen GPU with hardware-accelerated ray
                  tracing brings console-level graphics to your fingertips.
                </p>
                <p className="text-primary">Learn more about Apple Intelligence</p>
              </div>
            </div>

            <div className="max-w-3xs space-y-14">
              <div className="space-y-2">
                <p>Upto</p>
                <h3>4x Faster</h3>
                <p>Pro Rendering Performance</p>
              </div>

              <div className="space-y-2">
                <p>Upto</p>
                <h3>1.5x Faster</h3>
                <p>CPU Performance than M2</p>
              </div>
            </div>

        </div>
      </div>
    </section>
  )
}

export default Showcase
