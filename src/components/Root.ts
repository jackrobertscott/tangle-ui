import { createStaticComponent } from "../utils/component"
import { fib } from "../utils/fib"
import { getTheme } from "../utils/theme"

export const Root = createStaticComponent("div", {
  padding: fib(8),
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  overflow: "auto",
  backgroundColor: getTheme().bg.root.toString(),
})
