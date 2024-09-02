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
    <div className={color + " max-w-[1400px] p-4 flex-wrap rounded-3xl justify-start items-start gap-8 flex"}>
      {children}  
    </div>
  )
}
export function SectionList({sections}){
  return(
    <ul className="flex list-none flex-col bg-inherit items-center justify-center gap-4 py-1 w-full">
      {sections.length &&
        sections.map((section, id) => (
          <li key={id} className="h-fit w-full px-24 py-16 flex-col justify-center items-center inline-flex">
            {
              section.type == "skill" ? <>
              <Section color={section.color}>
                  <img className="max-w-[30%] h-auto rounded-3xl" src={section.image} />
                  <div className="flex-[1_0_80%] flex-wrap grow shrink basis-0 h-fit p-2.5 flex-col justify-center items-center gap-8 flex">
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
                    <a href={section.href}><img className=" w-64 h-64 bg-gray-200/50 rounded-3xl" src={section.image} /></a>    
                    <div className="grow flex-wrap  basis-0 h-fit p-2.5 flex-col justify-center items-start gap-4 inline-flex">
                          {section.inner}
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