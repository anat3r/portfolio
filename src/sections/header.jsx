import { Button } from "../elements/elems"
export function Header({children}) {
  return (
    <div className="flex flex-1 justify-between items-center px-8 py-2 w-full">
      {children}
    </div>
  )
}
export function ButtonList({ btns }) {
  return (
    <ul className="list-none flex items-center justify-end gap-8 py-1">
      {btns.length &&
        btns.map((btn, id) => (
          <li key={id}>
            <Button roundf label={btn.label} href={btn.href} />
          </li>
        ))
      }
    </ul>
  )
}