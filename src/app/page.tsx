"use client";
import Image from 'next/image'
import logo from './logo.png'
import TextTransition, { presets } from 'react-text-transition';
import { motion } from 'framer-motion';
import React from 'react';
import youtube from './images/youtube-symbol1.png'
import dc from './images/dc.png'
import spoti from './images/spoti.png'
import git from './images/git.png'
import twit from './images/Twit.png'
import insta from './images/insta.png'
import red from './images/red.png'
import pin from './images/pin.png'
import mail from './images/mail.png'
import Iframe from 'react-iframe'

const TEXTS = ['Create', 'Code', 'Design'];


export default function Home() {

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index: number) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);


  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

      
      <div className='maindiv scrollbar' id='scrollbar' style={{minHeight:'100%', minWidth: '100%'}}>

  <motion.div className='bigtext flex p-0' initial="hidden" animate="visible" variants={{
  hidden: {
    scale: .5,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: .2
    }
  },
}}>


        <motion.div className='bigtext flex p-0' initial="hidden" animate="visible" variants={{
  hidden: {
    scale: .5,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: .5
      
    }
  },
}}>

  <h1 className='text'>Let&apos;s </h1> <TextTransition className='animatedText' delay={3} springConfig={presets.gentle}>{TEXTS[index % TEXTS.length]}</TextTransition>
 </motion.div>

<motion.div className='profile p-1' initial="hidden" animate="visible" variants={{
  hidden: {
    scale: .5,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.6
    }
  },
}}>



          <div className='imgname '>
             <Image alt='alternate text' src={logo} className='logo' style={{borderRadius:'100%', border: '2px solid white'}}></Image>
            <h1 className='name'>Arqies</h1>
          </div>
          <div className='flex flex-col abmedia justify-center items-center'>
            <p className='aboutme'>Hi, I am Arqies, a Software/AI Engineer specializing in full-stack development and machine learning. I build scalable applications, focusing on innovative AI solutions and creative web development.</p>

            <div className='flex gap-0'>
                  <li className="flex flex-warp gap-5 medialist">
                      <a href="https://discordapp.com/users/772047297961525269" target="_blank" ><Image alt='ase' className="testcolor"src={dc} ></Image></a>
                      <a href="https://github.com/arqies" target="_blank" ><Image alt='ase' className="testcolor"src={git} ></Image></a>
                      <a href="mailto: contact@arqies.com" target="_blank" ><Image alt='ase' className="testcolor"src={mail} ></Image></a>
                    
                  </li>

            </div>
            </div>


        </motion.div>

<div className='flex flex-col items-center justify-center' style={{minWidth:'100%'}}>
<div className='dls'>
        <Iframe url="https://downloads.arqies.com"
        width="100%"
        height="720px"
        id=""
        className="dl"
        display="block"
        position="relative"/>
</div>

</div>
            </motion.div>


      </div>


    </main>
  )
}