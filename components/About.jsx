'use client'

import { useAppContext } from '@app/layout'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const About = () => {
  // For swipe
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null) 

  const mycontext = useAppContext();
  const router = useRouter()

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50 

  const onTouchStart = (e) => {
      setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
      setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

  const onTouchEnd = () => {
      if (!touchStart || !touchEnd) return
      const distance = touchStart - touchEnd
      const isLeftSwipe = distance > minSwipeDistance
      const isRightSwipe = distance < -minSwipeDistance
      if (isLeftSwipe || isRightSwipe) {
          if(isLeftSwipe){ 
              router.push("/education")
              mycontext.setSelected('/education')
          }
          else{
              router.push("/")
              mycontext.setSelected('/')
          }
      }
  }

  return (
    <section className="mt-7 ml-0 md:ml-5 md:mt-2 pt-0" 
              onTouchStart={onTouchStart} 
              onTouchMove={onTouchMove} 
              onTouchEnd={onTouchEnd} 
    >
        <h1 className="heading text-3xl">
          About Me
        </h1>
        <p className="plain-text">
          Hey, I am Muhammed Mahir P C, 
          and I have done my Master of Computer Applications
          (MCA) 
          from Cochin University of Science and Technology. 
        </p>
        <p className="plain-text">
          I have a keen interest in 
          <span className="font-semibold"> machine learning</span>, 
          <span className="font-semibold"> neural networks</span>, 
          and <span className="font-semibold"> deep learning</span>.
          These fields offer exciting
          opportunities to develop intelligent systems
          that can learn and make predictions from data. 
          By exploring various algorithms, frameworks, 
          and tools in machine learning and deep learning, 
          I aim to develop models that can understand 
          and analyze complex patterns, leading develop 
          in areas such as 
          <span className="font-semibold"> image recognition</span> 
          and <span className="font-semibold"> natural language processing</span> (NLP).
          I'm excited to continue 
          my learning journey in both web development 
          and machine learning to broaden my skillset 
          and create impactful applications.
        </p>
        <p className="plain-text">
          Throughout my academic journey, I have gained 
          expertise in programming languages like 
          Java, Python, C and I have also acquired hands-on 
          experience in web development tools such as HTML, CSS, JavaScript, 
          and Reactjs. I am passionate about exploring new web 
          development technologies and trends, and I am always 
          looking for opportunities to learn and grow as a developer.
          Apart from my technical skills, 
          I am a dedicated and result-driven individual 
          who is committed to delivering high-quality work 
          within deadlines. I am a team player and enjoy 
          collaborating with fellow developers to build innovative solutions.
        </p>
    </section>
  )
}

export default About
