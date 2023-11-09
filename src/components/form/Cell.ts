import { css } from "@emotion/css"
import { ReactNode } from "react"
import { createComponent, createCssComponent } from "../../utils/component"
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
    },
    class: [disabled ? disabledClass : undefined],
  })
})

const CellWrap = createCssComponent("div", (theme) => ({
  display: "flex",
  flexDirection: "row",
  backgroundColor: theme.bg.cell.toString(),
  padding: theme.padding.cell,
  gap: theme.padding.cell,
}))

const disabledClass = css({
  // todo
})
