import resume from "../assets/RuslanBedychev.pdf"
import { Button } from "../elements/elems"
export function AboutSec()
{
  return(
    <>
      <div className="w-full h-fit px-60 py-72 bg-neutral-200/5 justify-center items-center  gap-8 inline-flex">
        <div className="grow shrink basis-0 h-fit w-fit justify-center items-center flex-wrap gap-12 flex">
          <div className="flex-center flex-col justify-center items-start inline-flex">
            <div className=" text-zinc-800 text-base font-medium ">I am,</div>
            <div className=" text-black text-5xl font-medium">Frontend developer </div>
            <div className=" text-black text-2xl font-medium">with experience in design</div>
          </div>
          <div className="p-4 flex-col h-full justify-center items-center gap-8 inline-flex">
            <Button href={resume} gray label="Resume" ></Button>
            <Button label="Contact" href='mailto:ruslanbedychevwork@gmail.com'></Button>
          </div>
        </div>
      </div>
    </>
  )

}