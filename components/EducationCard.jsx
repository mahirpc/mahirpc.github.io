import Image from "next/image"

const EducationCard = ({imgSrc,courseName,duration,institution,institutionSubpart}) => {
  return (
    <div className='education-card'>
        <Image src={imgSrc} 
            width={95} 
            height={95} 
            alt='altText'
            className='education-logo'
        />
        <div className='flex flex-col justify-center ml-5'>
            <h2 className='text-xl font-semibold mb-2'>
                {courseName}
            </h2>
            <p className=' text-slate-500 text-sm'> {duration} </p>
            <p className='text-slate-600'> {institution} </p>
            <p>
              {institutionSubpart}
            </p>
        </div>
    </div>
  )
}

export default EducationCard
