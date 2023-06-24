'use client'

import { useAppContext } from '@app/layout'
import { useRouter } from 'next/navigation'
import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Home = () => {
    // For managing contact in a dialog
    const [isDialogOpen,setIsDialogOpen] = useState(false)
    const [submitting, setSubmitting] = useState(false)
    const [msg, setMsg] = useState({
        name: '',
        email: '',
        message: ''
    })

    // For swipe
    const [touchStart, setTouchStart] = useState(null)
    const [touchEnd, setTouchEnd] = useState(null) 


    const mycontext = useAppContext();
    const router = useRouter()

    const sendMail = async (e) => {
        e.preventDefault();
        setSubmitting(true)

        try{
            const response = await fetch('/api/sendmail',{
            method: 'POST',
            body: JSON.stringify({                    
                name: msg.name,
                email: msg.email,
                message: msg.message,
                })
            })
            if(response.ok){
                setMsg({name: '', email: '', message: ''})
            }

        } catch(error){
            console.log(error)
            mycontext.setSelected('/')
        } finally{
            setSubmitting(false)
            setIsDialogOpen(false)
            window.location.reload()
        }
    }

    const dialogEl = useRef(null)
    const openDialog = () => {
        setIsDialogOpen(true)
        dialogEl.current.showModal()
    }
    const closeDialog = () => {
        dialogEl.current.close()
        setIsDialogOpen(false)
    }

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
                router.push("/about")
                mycontext.setSelected('/about')
            }
            else{
                router.push("/contact")
                mycontext.setSelected('/contact')
            }
        }
    }
    

  return (
    <section className="mt-7 ml-0 md:ml-5 md:mt-2 pt-0"
            onTouchStart={onTouchStart} 
            onTouchMove={onTouchMove} 
            onTouchEnd={onTouchEnd} 
    >
        <h1 className="heading text-3xl">Muhammed Mahir</h1>
        <p className="plain-text">
            Hii, I'm Muhammed Mahir P C. I'm a 
            <span className="font-semibold"> System Engineer</span> at 
            <span className="font-semibold"> TCSL</span>.
        </p>
        <div className="profile-container">
            <Image src="/assets/images/profile.jpg" alt="profile"
                     width={100} height={100} 
                     className='profile-img'
                     priority={true}
                     quality={75}
            />
            <div className='flex flex-col justify-start items-start md:ml-8 mt-5 md:my-auto text-slate-500'>
                <div className='flex flex-row justify-start items-start'>
                    <div className='pt-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-github" viewBox="0 0 16  16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                    </div>
                    <Link href='https://github.com/mahirpc' target='_blank'>
                        <p className='mx-2 '>mahirpc</p>
                    </Link> 
                </div>
                <div className='flex flex-row justify-start items-start'>
                    <div className='pt-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                        </svg>
                    </div>
                    <Link href='https://www.linkedin.com/in/mahirpc/' target='_blank'>
                        <p className='mx-2'>muhammed mahir</p>
                    </Link> 
                </div>
                <div className='flex flex-row justify-start items-start'>
                    <div className='pt-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="gray" className="bi bi-twitter" viewBox="0 0 16 16">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                        </svg>
                    </div>
                    <Link href='https://twitter.com/muhammedmahirpc' target='_blank'>
                        <p className='mx-2'>@muhammedmahirpc</p>
                    </Link>
                </div>
            </div>
        </div>
        <p className='plain-text'>
            I have my masters in Computer Applications 
            from Cochin University of Science and Technology, Cochin.
            I'm passionate about building web applications and
            exploring the world of machine learning and deep learning. 
        </p>
        <div className='flex flex-row justify-start font-mono py-1
                      w-[fit-content] cursor-pointer hover:text-gray-500 
                      hover:scale-y-110 transform transition duration-100 ease-in-out '
            onClick={()=>openDialog()}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-arrow-up-right ml-0 mt-1" viewBox="0 0 17 17">
                <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
            </svg>
            <p className='ml-1'>share your thoughts</p>
        </div>
        
        {/* dialog for contact */}
        <dialog open={isDialogOpen ? 'open' : false} className='dialog-box' id="dialog" ref={dialogEl}>
            <div className="flex flex-col">
                <div className='w-full  md:w-[360] border-0 rounded-md pl-0 pb-2
                            border-gray-300 mt-4'
                 >
                    <svg onClick={closeDialog} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg ml-auto mr-3" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                    </svg>
                    <form className=" w-full max-w-[350px] md:w-[350] font-mono pr-2" 
                        onSubmit={sendMail}>
                        <label htmlFor="form-name" className="text-gray-800 font-semibold">Name</label><br/>
                        <input type="text" 
                                className="bg-transparent hover:bg-neutral-200
                                    text-gray-800 font-normal py-1 px-3 w-full mb-3
                                        border-2 border-gray-700 hover:border-gray-500 rounded"
                                id="form-name"
                                placeholder="Enter your name"
                                value={msg.name}
                                required
                                name='name'
                                onChange={(e)=>{setMsg({...msg,name:e.target.value})}}
                        />
                        <label htmlFor='form-email' className="text-gray-800 font-semibold">Email id</label>
                        <br/>
                        <input 
                            className="bg-transparent hover:bg-neutral-200
                                    text-gray-800 font-normal py-1 px-3 w-full mb-3
                                        border-2 border-gray-700 hover:border-gray-500 rounded"
                            type="email"
                            id='foem-email'
                            placeholder="Enter your email id"
                            value={msg.email}
                            required
                            name='email'
                            onChange={(e)=>{setMsg({...msg, email:e.target.value})}}
                            
                        />
                        <br/>
                        <label htmlFor='form-message' className="text-gray-800 font-semibold">
                            Message
                        </label>
                        <br/>
                        <textarea 
                            id='form-message'
                            className="bg-transparent hover:bg-neutral-200
                                    text-gray-800 font-normal py-1 px-3 w-full mb-1
                                        border-2 border-gray-700 hover:border-gray-500 rounded"
                            rows="4"
                            placeholder="Enter your message"
                            value={msg.message}
                            name='message'
                            onChange={(e)=>{setMsg({...msg, message:e.target.value})}}
                        />
                        <br/>
                        
                        <button type='submit' 
                                className="bg-transparent hover:bg-neutral-500
                                text-gray-800 font-semibold hover:text-white py-1 px-3
                                border border-gray-700 hover:border-transparent rounded"
                        >
                            {!submitting ? "Send" : "Sending..."}
                        </button>
                    </form>
                </div>
            </div>
        </dialog>
    </section>
  )
}

export default Home
