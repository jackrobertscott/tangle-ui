import { css } from "@emotion/css"
import { HslaObject } from "css-brewery"

export const clickableClass = () =>
  css({
    cursor: "pointer",
    userSelect: "none",
    position: "relative",
    "> *": { pointerEvents: "none" },
  })

export const bgHoverClass = (bg: HslaObject, amount: number = -5) =>
  css({
    backgroundColor: bg.toString(),
    ":hover": { backgroundColor: bg.adjust({ l: -5 }).toString() },
    ":active": { backgroundColor: bg.toString() },
  })
