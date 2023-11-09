import { createComponent, createCssComponent } from "../../utils/component"

export const Nested = createComponent(() => {
  return NestedWrap([
    // todo
  ])
})

const NestedWrap = createCssComponent("div")
