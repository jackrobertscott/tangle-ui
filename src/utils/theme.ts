import { border, hsla, shadow } from "css-brewery"
import { fib } from "./fib"
import { createSignal } from "./signal"

export const [getTheme, setTheme] = createSignal({
  fg: {
    primary: hsla({ l: 100, a: 1 }),
    secondary: hsla({ l: 100, a: 0.7 }),
    placeholder: hsla({ l: 100, a: 0.5 }),
    inverted: hsla({ l: 0 }),
  },
  bg: {
    root: hsla({ l: 10 }),
    cell: hsla({ l: 20 }),
    disabled: hsla({ l: 10 }),
    scroll: hsla({ l: 30 }),
    inverted: hsla({ l: 90 }),
    clear: hsla({ a: 0 }),
  },
  border: {
    outer: border({ width: 2, color: hsla({ l: 0 }) }),
    inner: border({ width: 2, color: hsla({ l: 0 }) }),
  },
  padding: {
    cell: fib(6),
  },
  radius: {
    cell: fib(5),
  },
  shadow: {
    outer: shadow({
      blur: fib(8),
      spread: fib(-6),
      color: hsla({ l: 100, a: 0.5 }),
    }),
  },
  time: {
    effect: 200,
  },
})

export type ThemeType = ReturnType<typeof getTheme>
