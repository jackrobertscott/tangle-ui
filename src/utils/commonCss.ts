import { CSSObject } from "@emotion/css"
import { HslaObject } from "css-brewery"

export const clickableCss = (): CSSObject => ({
  cursor: "pointer",
  userSelect: "none",
  position: "relative",
  "> *": { pointerEvents: "none" },
})

export const bgHoverCss = (bg: HslaObject, amount: number = -5): CSSObject => ({
  backgroundColor: bg.toString(),
  ":hover": { backgroundColor: bg.adjust({ l: -5 }).toString() },
  ":active": { backgroundColor: bg.toString() },
})
