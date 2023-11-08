import { ReactNode } from "react"
import { createPortal } from "react-dom"
import { createComponent } from "../../utils/component"

export const Portal = createComponent<{
  children?: ReactNode
  root?: HTMLElement
}>(({ children, root = document.getElementById("root") }) => {
  if (!root) throw new Error("Root element not provided to Portal")
  return createPortal(children, root)
})
