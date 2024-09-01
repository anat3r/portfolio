export function Footer()
{
  return (
    <div className="w-full h-28 px-8 py-2 bg-white border-t-2 border-zinc-800 justify-center items-start gap-4 inline-flex">
      <div className="grow shrink basis-0 self-stretch flex-col justify-start items-center gap-4 inline-flex">
        <div className="self-stretch justify-start items-center inline-flex">
          <div className="text-zinc-800 text-4xl font-semibold ">Ruslan Bedychev</div>
        </div>
        <div className="self-stretch justify-start items-center gap-8 inline-flex">
          <div className="w-10 h-10 px-4 bg-zinc-800 rounded-3xl" />
          <div className="w-10 h-10 px-4 bg-zinc-800 rounded-3xl" />
          <div className="w-10 h-10 px-4 bg-zinc-800 rounded-3xl" />
        </div>
      </div>
      <div className="grow shrink basis-0 self-stretch py-2 flex-col justify-start items-end gap-4 inline-flex">
        <div className="justify-start items-center gap-1 inline-flex">
          <div className="text-zinc-800 text-xl font-medium ">mail: </div>
          <div>
            <span className="text-zinc-800 text-xl font-medium "> </span>
            <a href="mailto:ruslanbedychevwork@gmail.com" className="text-indigo-700 hover:text-indigo-500 text-xl font-medium font-['Raleway']">ruslanbedychevwork@gmail.com</a></div>
        </div>
        <div className="justify-start items-center gap-1 inline-flex">
          <div className="text-zinc-800 text-xl font-medium font-raleway">phone(WhatsApp, Viber):</div>
          <a href="tel:+48631709322" className="text-indigo-700 hover:text-indigo-500 text-xl font-normal font-encode">+48631709322</a>
        </div>
      </div>
    </div>
  )
}