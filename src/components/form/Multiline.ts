import { createComponent, createCssComponent } from "../../utils/component"

export const Multiline = createComponent<{
  value?: string | null
  onValue?: (value: string | null) => void
  placeholder?: string
  width?: string
  rows?: number
}>(({ value, onValue, placeholder, width, rows }) => {
  return MultilineWrap({
    rows,
    placeholder,
    value: value || "",
    style: { width },
    onChange: (e) => onValue?.(e.currentTarget.value),
  })
})

const MultilineWrap = createCssComponent("textarea", (theme) => ({
  flexGrow: 1,
  resize: "none",
  padding: theme.padding.cell,
  background: theme.bg.cell.toString(),
  "::placeholder": { color: theme.fg.placeholder.toString() },
}))
