'use client'

import { useState } from 'react';
import { useAppContext } from '@app/layout'
import { useRouter } from 'next/navigation'

import studies from '@data/studies.js'
import EducationCard from '@components/EducationCard.jsx'
const Education = () => {
    // For swipe
    const [touchStart, setTouchStart] = useState(null)
    const [touchEnd, setTouchEnd] = useState(null)

    const mycontext = useAppContext();
    const router = useRouter()

    const eduationCards = studies.map((study) =>(
        <EducationCard 
            key={study.id}
            imgSrc={study.imgSrc}
            courseName={study.courseName}
            duration={study.duration}
            institution={study.institution}
            institutionSubpart={study.institutionSubpart}
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
              router.push("/projects")
              mycontext.setSelected('/projects')
          }
          else{
              router.push("/about")
              mycontext.setSelected('/about')
          }
      }
  }
  return (
    <section className="mt-7 ml-0 md:ml-5 md:mt-2 pt-0"
            onTouchStart={onTouchStart} 
            onTouchMove={onTouchMove} 
            onTouchEnd={onTouchEnd} 
    >
        <h1 className="heading text-3xl mb-5">Education</h1>
        <div className="flex flex-col md:flex-row md:flex-wrap 
                        justify-start max-w-[640px]"
        >
            {eduationCards}
        </div>
    </section>
  )
}

export default Education
