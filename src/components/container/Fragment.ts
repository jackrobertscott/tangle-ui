import React, { ReactNode } from "react"
import { createComponent } from "../../utils/component"
import { createElement } from "../../utils/element"

export const Fragment = createComponent<{
  children: ReactNode
}>(({ children }) => {
  return createElement(React.Fragment, { children })
})
