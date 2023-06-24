'use client'

import { useState } from 'react';
import { useAppContext } from '@app/layout'
import { useRouter } from 'next/navigation'

import projects from "@data/projects.js";
import ProjectCard from "@components/ProjectCard";
const Projects = () => {
  // For swipe
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null) 

  const mycontext = useAppContext();
  const router = useRouter()

  const projectCards = projects.map((project) => (
      <ProjectCard
        key={project.id}
        name={project.name}
        techUsed={project.techUsed}
        description={project.description}
        link={project.link}
      />
  ));

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
              router.push("/contact")
              mycontext.setSelected('/contact')
          }
          else{
              router.push("/education")
              mycontext.setSelected('/education')
          }
      }
  }

  return (
    <section className="mt-7 ml-0 md:ml-5 md:mt-2 pt-0"
            onTouchStart={onTouchStart} 
            onTouchMove={onTouchMove} 
            onTouchEnd={onTouchEnd} 
    >
        <h1 className="heading text-3xl mb-5">Projects</h1>

        <div className="flex flex-col md:flex-row md:flex-wrap justify-start">
          {projectCards}
        </div>

    </section>
  )
}

export default Projects
