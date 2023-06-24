const ProjectCard = ({name,techUsed,description,link}) => {
  return (
    <a href={link}
            className="project-card"
            target="_blank"
    >
        <div className="">
            <h2 className="font-semibold text-xl mb-1">
            {name}
            </h2>
            <div className="flex flex-row my-1">
                <p className="text-slate-500 leading-4 text-xs my-auto w-60 md:w-52 lg:w-60">
                    {techUsed}
                </p>
            </div>
            <div className="flex flex-row">
                <p className="text-slate-600 leading-4 w-60">
                    {description}
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-up-right ml-2" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
                </svg>
            </div>
        </div>
    </a>
  )
}

export default ProjectCard
