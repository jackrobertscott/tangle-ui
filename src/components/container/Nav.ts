import { mdiBriefcase, mdiLogout } from "@mdi/js"
import { createComponent, createCssComponent } from "../../utils/component"
import { ComponentProps } from "../../utils/element"
import { fib } from "../../utils/fib"
import { Fragment } from "./Fragment"
import { NavOption } from "./NavOption"

export const Nav = createComponent<{
  options: ComponentProps<typeof NavOption>[]
}>(({ options }) => {
  return NavWrap([
    Fragment({
      children: options.map((option) => {
        return NavOption({
          ...option,
        })
      }),
    }),
    NavSpacer(),
    NavOption({
      icon: mdiBriefcase,
    }),
    NavOption({
      icon: mdiLogout,
    }),
  ])
})

const NavWrap = createCssComponent("div", (theme) => {
  return {
    flexGrow: 1,
    width: fib(10),
    overflow: "hidden",
    borderRadius: theme.radius.large,
    border: theme.border.outer.toString(),
    backgroundColor: theme.border.inner.color.toString(),
    gap: theme.border.inner.width,
  }
})

const NavSpacer = createCssComponent("div", (theme) => {
  return {
    flexGrow: 1,
    backgroundColor: theme.bg.cell.toString(),
  }
})
