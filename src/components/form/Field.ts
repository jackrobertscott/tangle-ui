import { px } from "css-brewery"
import { ReactNode } from "react"
import { createComponent, createCssComponent } from "../../utils/component"

export const Field = createComponent<{
  label?: string
  flag?: string
  hint?: string
  children?: ReactNode
}>(({ label, flag, hint, children }) => {
  return FieldWrap([
    label &&
      FieldHead([
        FieldHeadRow([FieldLabel(label), FieldFlag(flag)]),
        hint && FieldHint(hint),
      ]),
    FieldInputWrap(children),
  ])
})

const FieldWrap = createCssComponent("div", (theme) => ({
  gap: theme.padding.cell,
}))

const FieldHead = createCssComponent("div")

const FieldHeadRow = createCssComponent("div", (theme) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  padding: px(0, theme.border.outer.width),
}))

const FieldLabel = createCssComponent("div", (theme) => ({
  padding: px(0, theme.padding.cell),
}))

const FieldFlag = createCssComponent("div", (theme) => ({
  color: theme.fg.secondary.toString(),
  padding: px(0, theme.padding.cell),
}))

const FieldHint = createCssComponent("div", (theme) => ({
  color: theme.fg.secondary.toString(),
  padding: px(0, theme.border.outer.width + theme.padding.cell),
}))

const FieldInputWrap = createCssComponent("div", (theme) => ({
  display: "flex",
  flexDirection: "row",
  overflow: "auto",
  borderRadius: theme.radius.cell,
  border: theme.border.outer.toString(),
  backgroundColor: theme.border.inner.color.toString(),
  gap: theme.border.inner.width,
}))
