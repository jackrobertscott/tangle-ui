import { createComponent } from "../utils/component"
import { Divider } from "./Static"

export const Root = createComponent(() => {
  return RootWrapper({
    children: "Hello, Bob!",
  })
})

const RootWrapper = Divider.extend({
  padding: 100,
})
