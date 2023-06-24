import About from '@components/About'

export const metadata = {
    title: 'About | mahir',
    description: 'About section',
  }

const page = () => {
  return (
    <div className="right-container">
        <About />
    </div>
  )
}

export default page
