import { createStaticComponent } from "../utils/component"
import { fib } from "../utils/fib"

export const Root = createStaticComponent("div", {
  padding: fib(8),
  overflow: "auto",
})
