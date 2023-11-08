import { ReactNode } from "react"
import { createComponent, createStaticComponent } from "../../utils/component"

export const Page = createComponent<{
  title?: string
  children?: ReactNode
}>(({ title, children }) => {
  return PageWrap([PageHead([title]), PageBody([children])])
})

const PageWrap = createStaticComponent("div")

const PageHead = createStaticComponent("div")

const PageBody = createStaticComponent("div")
