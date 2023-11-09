import { ReactNode } from "react"
import { createComponent, createCssComponent } from "../../utils/component"
import { getTheme } from "../../utils/theme"
import { Icon } from "../display/Icon"

export const Cell = createComponent<{
  icon?: string
  label?: string
  children?: ReactNode
  hug?: boolean
  centered?: boolean
  onClick?: () => void
  disabled?: boolean
  secondary?: boolean
}>(({ icon, label, children, hug, centered, onClick, disabled, secondary }) => {
  return CellWrap({
    onClick: disabled ? undefined : onClick,
    children: children ? children : [icon && Icon({ icon }), label],
    style: {
      flexGrow: hug ? undefined : 1,
      justifyContent: centered ? "center" : "space-between",
      backgroundColor: disabled
        ? getTheme().bg.cell.adjust({ l: -5 }).toString()
        : undefined,
    },
  })
})

const CellWrap = createCssComponent("div", (theme) => ({
  display: "flex",
  flexDirection: "row",
  backgroundColor: theme.bg.cell.toString(),
  padding: theme.padding.cell,
  gap: theme.padding.cell,
}))
