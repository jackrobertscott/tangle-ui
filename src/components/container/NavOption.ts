import { bgHoverClass, clickableClass } from "../../utils/commonCss"
import { createComponent, createCssComponent } from "../../utils/component"
import { fib } from "../../utils/fib"
import { getTheme } from "../../utils/theme"
import { Icon } from "../display/Icon"
import { Tooltip } from "./Tooltip"

export const NavOption = createComponent<{
  label?: string
  icon?: string
  active?: boolean
  onClick?: () => void
}>(({ label, icon, active, onClick }) => {
  const bg = getTheme().bg.cell.adjust({ l: active ? 10 : 0 })
  return Tooltip({
    label,
    renderTrigger: (setOpen, setClosed) =>
      NavOptionWrap({
        onClick,
        class: [clickableClass(), bgHoverClass(bg)],
        onMouseEnter: (e) => setOpen(e.currentTarget),
        onMouseLeave: () => setClosed(),
        children:
          icon &&
          Icon({
            icon,
          }),
      }),
  })
})

const NavOptionWrap = createCssComponent("div", (theme) => ({
  height: fib(10),
  fontSize: "1.25em",
  justifyContent: "center",
  alignItems: "center",
}))
