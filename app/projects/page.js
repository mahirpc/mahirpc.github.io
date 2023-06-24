import Projects from '@components/Projects'

export const metadata = {
    title: 'Projects | mahir',
    description: 'Projects done',
  }

const page = () => {
  return (
    <div className="right-container">
        <Projects />
    </div>
  )
}

export default page