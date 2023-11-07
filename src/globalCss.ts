import { injectGlobal } from "@emotion/css"
import { shadow } from "css-brewery"
import { fib } from "./utils/fib"
import { getTheme } from "./utils/theme"

const theme = getTheme()

injectGlobal({
  "#root": {
    overflow: "auto",
    color: theme.fg.primary.toString(),
    backgroundColor: theme.bg.root.toString(),
  },

  /** Scrollbar */
  "::-webkit-scrollbar": {
    width: fib(7),
    height: fib(7),
    backgroundColor: theme.bg.scroll.toString(),
    ":vertical": {
      boxShadow: shadow({
        inset: true,
        color: theme.border.inner.color,
        x: theme.border.inner.width,
      }).toString(),
    },
    ":horizontal": {
      boxShadow: shadow({
        inset: true,
        color: theme.border.inner.color,
        y: theme.border.inner.width,
      }).toString(),
    },
  },
  "::-webkit-scrollbar-corner": {
    backgroundColor: theme.bg.scroll.toString(),
    boxShadow: shadow({
      inset: true,
      color: theme.border.inner.color,
      x: theme.border.inner.width,
      y: theme.border.inner.width,
    }).toString(),
  },
  "::-webkit-scrollbar-thumb": {
    backgroundClip: "padding-box",
    backgroundColor: theme.bg.scroll.shift(10).toString(),
    ":vertical": {
      borderLeft: theme.border.inner.toString(),
    },
    ":horizontal": {
      borderTop: theme.border.inner.toString(),
    },
  },
})
