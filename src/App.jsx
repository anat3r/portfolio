import { useState } from 'react'
import {Header, ButtonList} from './sections/header'
import { Footer} from './sections/footer'
import { AboutSec } from './sections/about'
import {Button, Section, SectionList} from './elements/elems'
import ReactDOM from 'react-dom'
import photoshop from './assets/photoshop.png'
import proj1 from './assets/proj1.png'
import proj2 from './assets/proj2.png'
import proj3 from './assets/proj3.png'
import tailwind from './assets/tailwind.svg'
import me from './assets/me.jpeg'
import project from './assets/project.png'
import { ProjectTable } from './sections/projects'


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
        <h2 className="IAm text-zinc-800 text-xl font-medium font-['Raleway']">I am,</h2>
        <span className="self-stretch text-wrap w-fit max-w-full flex-wrap text-zinc-800 text-2xl font-medium font-['Raleway']">Frontend Developer with a passion for design, specializing in creating visually appealing, user-friendly web interfaces. With experience in React, JS Native, TailwindCSS, SASS, and Vite, I build responsive and high-performance websites. I’m skilled in Git, GitHub, and design tools like Photoshop and Figma, allowing me to seamlessly translate designs into functional code. After years of working on small projects, I’m excited to take on new freelance opportunities and help bring your ideas to life with creative, effective web solutions.</span>
      <i id='projects'></i>
    </>, 
    image: me },
  {
    color: "bg-gradient-to-r from-indigo-700 to-blue-600", 
    type: "", 
    href:"",
    inner:
      <>
        <h3 className="IAm text-neutral-100 text-2xl font-semibold">My Project</h3>
        <span className="self-stretch text-wrap w-fit max-w-full flex-wrap text-neutral-100 text-xl font-medium font-['Raleway']">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. </span>
      </>, 
      image: project },
  {
    color: "bg-gradient-to-r from-violet-600 via-purple-700 to-fuchsia-700",
    type: "",
    href: "",
    inner:
      <>
        <h3 className="IAm text-neutral-100 text-2xl font-semibold">My Project</h3>
        <span className="self-stretch text-wrap w-fit max-w-full flex-wrap text-neutral-100 text-xl font-medium font-['Raleway']">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. </span>
      </>,
    image: project
  },
  {
    color: "bg-gradient-to-l from-teal-500 via-sky-600 to-blue-600",
    type: "",
    href: "",
    inner:
      <>
        <h3 className="IAm text-neutral-100 text-2xl font-semibold">My Project</h3>
        <span className="self-stretch text-wrap w-fit max-w-full flex-wrap text-neutral-100 text-xl font-medium font-['Raleway']">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. </span>
      </>,
    image: project
  }
]
const otherProj = [
  { image: proj1, title: "Contact Book", about: "This is a simple yet functional contact book application built with React and Vite. The app allows users to add, view, edit, and delete contacts, making it a practical tool for managing personal or professional contacts.", links: { github: "https://github.com/anat3r/small-contact-list", site: "https://anat3r.github.io/small-contact-list"}},
  { image: proj2, title: "Web Chat App", about: "This is a simple web chat application built using Google Firebase for hosting, storage, and authentication. Users can sign in with Google Auth and start chatting instantly. Please note that all messages are visible to anyone who logs in, making this a public chat platform.", links: { github: "https://github.com/anat3r/superchat", site: "https://thatawesomechat.firebaseapp.com" } },
  { image: proj3, title: "React Tic Tac Toe Game", about: "This is a classic Tic Tac Toe game built with React. The game features a simple and intuitive interface, allowing two players to take turns and compete to get three in a row. It's a great example of managing state and rendering components dynamically in a React application.", links: { github: "https://github.com/anat3r/Tic-Tac-Toe", site: "https://anat3r.github.io/Tic-Tac-Toe/" } },
]


function App() {

  return (
    <div className=' text-xl box-border w-full h-auto bg-neutral-200/5 flex-col justify-start items-center inline-flex'>
      <Header> {/* Header + nav */}
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
      <div className='flex bg-inherit py-2 w-full h-fit flex-col justify-center items-center gap-8'> {/* Other projects section */}
        <h2 className='w-fit text-3xl font-semibold'>OtherProjects</h2>
        <ProjectTable projects={otherProj} />
      </div>
      <Footer />
      <i id='contact'></i>
    </div>
  )
}

export default App
