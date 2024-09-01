import { useState } from 'react'
import {Header, ButtonList} from './sections/header'
import { Footer} from './sections/footer'
import { AboutSec } from './sections/about'
import {Button, Section, SectionList} from './elements/elems'
import ReactDOM from 'react-dom'
import photoshop from './assets/photoshop.png'
import tailwind from './assets/tailwind.svg'
import me from './assets/me.jpeg'
import project from './assets/project.png'

/* import ProjectSec from './sections/projects'
import Footer from './sections/footer' */


const buttonsHead = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]
const skills = [
  { label: "JS", logo: "fa-js" },
  { label: "React", logo: "fa-react" },
  { label: "Github", logo: "fa-github" },
  { label: "Photoshop", logo: photoshop },
  { label: "Figma", logo: "fa-figma" },
  { label: "TailwindCSS", logo: tailwind },
  { label: "SASS", logo: "fa-sass" },
]
const sections = [
  {
    color: "bg-white", 
    type: "skill", 
    skills: skills, 
    href: "",    
    inner: 
    <> 
      <div className="IAm text-zinc-800 text-2xl font-medium font-['Raleway']">I am,</div>
        <div className="self-stretch text-wrap w-fit max-w-full flex-wrap text-zinc-800 text-3xl font-medium font-['Raleway']">Frontend Developer with a passion for design, specializing in creating visually appealing, user-friendly web interfaces. With experience in React, JS Native, TailwindCSS, SASS, and Vite, I build responsive and high-performance websites. I’m skilled in Git, GitHub, and design tools like Photoshop and Figma, allowing me to seamlessly translate designs into functional code. After years of working on small projects, I’m excited to take on new freelance opportunities and help bring your ideas to life with creative, effective web solutions.</div>
      <i id='projects'></i>
    </>, 
    image: me },
  {
    color: "bg-gradient-to-r from-indigo-700 to-blue-600", 
    type: "", 
    href:"",
    inner:
      <>
        <div className="IAm text-neutral-100 text-4xl font-bold">My Project</div>
        <div className="self-stretch text-wrap w-fit max-w-full flex-wrap text-neutral-100 text-3xl font-semibold font-['Raleway']">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. </div>
      </>, 
      image: project },
  {
    color: "bg-gradient-to-r from-violet-600 via-purple-700 to-fuchsia-700",
    type: "",
    href: "",
    inner:
      <>
        <div className="IAm text-neutral-100 text-4xl font-bold">My Project</div>
        <div className="self-stretch text-wrap w-fit max-w-full flex-wrap text-neutral-100 text-3xl font-semibold font-['Raleway']">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. </div>
      </>,
    image: project
  },
  {
    color: "bg-gradient-to-l from-teal-500 via-sky-600 to-blue-600",
    type: "",
    href: "",
    inner:
      <>
        <div className="IAm text-neutral-100 text-4xl font-bold">My Project</div>
        <div className="self-stretch text-wrap w-fit max-w-full flex-wrap text-neutral-100 text-3xl font-semibold font-['Raleway']">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. </div>
      </>,
    image: project
  }
]


function App() {

  return (
    <div className='w-screen h-screen bg-neutral-200/5 flex-col justify-start items-center inline-flex'>
      <Header>
        <div className="flex-1 w-96 h-16 justify-start items-center inline-flex">
          <a href="" className="w-36 text-indigo-700 hover:text-indigo-500 text-2xl font-bold">Ruslan Bedychev</a>
        </div>
        <ButtonList btns={buttonsHead} />
      </Header>
      <AboutSec>
        
      </AboutSec>
      <i id='about'></i>
      <SectionList sections={sections}>

      </SectionList>
      <Footer />
      <i id='contact'></i>
    </div>
  )
}

export default App
