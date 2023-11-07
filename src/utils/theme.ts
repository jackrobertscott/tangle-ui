import { border, hsla } from "css-brewery"
import { createSignal } from "./signal"

export const [getTheme, setTheme] = createSignal({
  border: {
    outer: border({ width: 2, color: hsla({ l: 0 }) }),
    inner: border({ width: 2, color: hsla({ l: 0 }) }),
  },
  fg: {
    primary: hsla({ l: 90 }),
    secondary: hsla({ l: 70 }),
  },
  bg: {
    root: hsla({ l: 10 }),
    table: hsla({ l: 20 }),
    scroll: hsla({ l: 30 }),
  },
})
