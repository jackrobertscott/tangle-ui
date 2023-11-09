import { ReactNode } from "react"
import { createComponent, createCssComponent } from "../../utils/component"

export const Page = createComponent<{
  title?: string
  children?: ReactNode
}>(({ title, children }) => {
  return PageWrap([PageHead([title]), PageBody([children])])
})

const PageWrap = createCssComponent("div")

const PageHead = createCssComponent("div")

const PageBody = createCssComponent("div")
