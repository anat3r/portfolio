export function Button({ gray=false, roundf=false, ext, href, label }) {
  const _class = (gray ? "bg-zinc-800 hover:bg-zinc-700" : "bg-indigo-700  hover:bg-indigo-600") + " text-white hover:text-neutral-50 px-4 py-2 " + (roundf ? "rounded-full" : "rounded-2xl");
  return (
    <div className="flex">
      {
        ext ? <a rel="external" target="_blank" className={_class} href={href}>{label}</a>
          : <a  target="_self" className={_class} href={href}>{label}</a>
      }
    </div>
  )
}
export function Section({ children, color }){
  return (
    <div className={color + " p-6 flex-wrap max-w-full rounded-3xl justify-start items-start gap-8 inline-flex"}>
      {children}  
    </div>
  )
}
export function SectionList({sections}){
  return(
    <ul className="list-none flex-col bg-neutral-200/5 items-center justify-center gap-8 py-1 w-full">
      {sections.length &&
        sections.map((section, id) => (
          <li key={id} className=" h-fit w-full max-w-full   px-12 py-16 flex-col justify-center items-center gap-2.5 inline-flex">
            {
              section.type == "skill" ? <>
              <Section color={section.color}>
                  <div className="w-96 h-auto bg-gray-200/50 rounded-3xl"><img className=" max-w-full h-auto rounded-3xl" src={section.image} /></div>
                <div className="flex-wrap grow shrink basis-0 h-fit p-2.5 flex-col justify-center items-center gap-8 flex">
                  <div className="grow flex-wrap shrink self-stretch h-fitflex-col justify-start items-start gap-2 flex">
                    {section.inner}
                  </div>
                  <ul className="list-none flex-wrap flex items-center justify-end gap-4 py-1">
                    {section.skills.length &&
                      section.skills.map((skill, id) => (
                        <li key={id} className="Skills self-stretch p-4 justify-start items-center gap-4 inline-flex">
                          <div className="Skill px-3 py-1 bg-indigo-700 rounded-full justify-start items-center gap-3 flex">
                            <div className="Ellipse1 p-1 pl-2 w-10 h-10 bg-indigo-700 flex-col justify-center items-center truncate">
                              {skill.logo.startsWith("fa") ? <span className='text-zinc-300 inline-block text-3xl'><i className={"icon fa-brands " + skill.logo + " fa-circle"}></i></span> : <img src={skill.logo} className=" w-full h-full "></img>}
                            </div>
                            <div className="React text-neutral-100 text-3xl font-medium font-['Raleway']">{skill.label}</div>
                          </div>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </Section>
              </> : 
              <>
                    <Section color={section.color}>
                    <a href={section.href}><img className=" w-96 h-96 bg-gray-200/50 rounded-3xl" src={section.image} /></a>    
                      <div className="grow shrink basis-0 h-96 p-2.5 flex-col justify-center items-center gap-8 inline-flex">
                      <div className="grow flex-wrap shrink self-stretch h-fitflex-col justify-start items-start gap-4 flex">
                          {section.inner}
                        </div>
                      </div>
                    </Section>  
              </>
            }
            
          </li>
        ))
      }
    </ul>
  )
}