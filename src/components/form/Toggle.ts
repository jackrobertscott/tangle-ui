import { bgHoverClass, clickableClass } from "../../utils/commonCss"
import { createComponent, createCssComponent } from "../../utils/component"

export const Toggle = createComponent<{
  value?: boolean | null
  onValue?: (value: boolean) => void
}>(({ value, onValue }) => {
  return ToggleWrap({
    onClick: () => onValue?.(!value),
    children: [
      ToggleOuterBox([value && ToggleInnerBox()]),
      ToggleLabel([value ? "Yes" : "No"]),
    ],
  })
})

const ToggleWrap = createCssComponent("div", (theme) => [
  clickableClass(),
  bgHoverClass(theme.bg.cell),
  {
    flexGrow: 1,
    justifyContent: "start",
    padding: theme.padding.cell,
  },
])

const ToggleOuterBox = createCssComponent("div", (theme) => ({
  width: theme.line.regular + "em",
  height: theme.line.regular + "em",
  borderRadius: theme.radius.tiny,
  border: theme.border.outer.toString(),
  justifyContent: "center",
  alignItems: "center",
}))

const ToggleInnerBox = createCssComponent("div", (theme) => ({
  width: (theme.line.regular / 2).toFixed(1) + "em",
  height: (theme.line.regular / 2).toFixed(1) + "em",
  backgroundColor: theme.border.outer.color.toString(),
  borderRadius: theme.radius.micro,
}))

const ToggleLabel = createCssComponent("div", {})
