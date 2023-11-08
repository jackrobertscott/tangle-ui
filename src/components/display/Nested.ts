import { createComponent, createStaticComponent } from "../../utils/component"

export const Nested = createComponent(() => {
  return NestedWrap([
    // todo
  ])
})

const NestedWrap = createStaticComponent("div")
