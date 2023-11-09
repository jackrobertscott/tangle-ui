import { createCssComponent } from "../../utils/component"

export const Form = createCssComponent("div", (theme) => ({
  gap: theme.padding.form,
  padding: theme.padding.form,
  backgroundColor: theme.bg.root.toString(),
}))
