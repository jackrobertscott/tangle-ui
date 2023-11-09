import { createComponent, createCssComponent } from "../../utils/component"

export const Input = createComponent<{
  value?: string | null
  onValue?: (value: string | null) => void
  placeholder?: string
  width?: string
  type?: string
}>(({ value, onValue, placeholder, width, type }) => {
  return InputWrap({
    placeholder,
    type: type ?? "text",
    value: value || "",
    style: { width },
    onChange: (e) => onValue?.(e.currentTarget.value),
  })
})

const InputWrap = createCssComponent("input", (theme) => ({
  flexGrow: 1,
  padding: theme.padding.cell,
  background: theme.bg.cell.toString(),
  "::placeholder": { color: theme.fg.placeholder.toString() },
}))
