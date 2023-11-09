import { ReactNode, useState } from "react"
import { createComponent, createStaticComponent } from "../../utils/component"
import { fib } from "../../utils/fib"
import { Fragment } from "./Fragment"

export const Tooltip = createComponent<{
  label?: string
  renderTrigger: (
    setOpen: (currentTarget: HTMLElement) => void,
    setClosed: () => void
  ) => ReactNode
}>(({ label, renderTrigger }) => {
  const [rect, setRect] = useState<Record<"x" | "y" | "w" | "h", number>>()
  return Fragment({
    children: [
      renderTrigger(
        (currentTarget) => {
          const i = currentTarget.getBoundingClientRect()
          setRect({ x: i.left, y: i.top, w: i.width, h: i.height })
        },
        () => setRect(undefined)
      ),
      label &&
        rect &&
        TooltipWrap({
          style: {
            top: rect.y,
            left: rect.x,
            width: rect.w,
            height: rect.h,
          },
          children: TooltipLabel({
            children: label,
          }),
        }),
    ],
  })
})

const TooltipWrap = createStaticComponent("div", (theme) => ({
  position: "absolute",
  justifyContent: "center",
  pointerEvents: "none",
  backgroundColor: theme.bg.inverted.toString(),
}))

const TooltipLabel = createStaticComponent("div", (theme) => ({
  left: "100%",
  position: "absolute",
  marginLeft: fib(6),
  padding: theme.padding.cell,
  borderRadius: theme.radius.cell,
  color: theme.fg.inverted.toString(),
  boxShadow: theme.shadow.outer.toString(),
  backgroundColor: theme.border.outer.color.toString(),
  zIndex: 100,
}))
