

export function ProjectTable({projects}){
  return(
    <ul className="w-full h-auto px-4 py-8  gap-8 flex flex-row flex-wrap justify-around max-w-[1400px]">
      {
        projects.map((project, id) => (
          <li key={id} className="flex bg-white p-8 gap-4 flex-col flex-[1_0_30%] rounded-2xl justify-center items-center"> {/* Project */}
            <div className="w-full px-2 flex flex-row justify-between">
            {
                (project.links?.github.length > 4) ? <a href={project.links.github}><span className='text-indigo-800 hover:text-indigo-600 inline-block text-3xl'><i className={"icon fa-brands fa-github fa-circle"}></i></span></a> : <div></div>
            }
            {
                (project.links?.site.length > 4) ? <a href={project.links.site}><span className='text-zinc-800 hover:text-zinc-600 inline-block text-3xl'><i className={"icon fa-solid fa-earth-europe"}></i></span></a> : <div></div>
            }
            </div>{/* Nav */}
            <div className="w-full h-auto rounded-2xl"><img src={project.image} className=" rounded-2xl w-full h-auto bg-slate-300"></img> {/* Icon */}</div>          
              <h4 className=" font-semibold w-fit text-2xl">{project.title}</h4>
              <span className=" text-xl font-medium">{project.about}</span>
          </li>
        ))
      }
    </ul>//Container
  )
}