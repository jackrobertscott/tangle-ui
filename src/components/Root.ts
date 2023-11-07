import { createComponent } from "../utils/component"
import { Divider } from "./Static"

export const Root = createComponent(() => {
  return RootWrapper({
    children: "Hello, World!",
  })
})

const RootWrapper = Divider.extend({
  padding: 50,
})
