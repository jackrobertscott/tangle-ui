import { createComponent, createCssComponent } from "../../utils/component"
import { createElement } from "../../utils/element"

export const Icon = createComponent<{ icon: string }>(({ icon }) => {
  return IconWrap({
    children: IconSvg({
      role: "img",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      children: createElement("path", {
        d: icon,
      }),
    }),
  })
})

const IconWrap = createCssComponent("div", {
  cursor: "default",
  userSelect: "none",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
})

const IconSvg = createCssComponent("svg", {
  fill: "currentcolor",
  stroke: "transparent",
})
