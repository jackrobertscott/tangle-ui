import { useNumberFromString } from "../../hooks/useNumberFromString"
import { createComponent } from "../../utils/component"
import { Input } from "./Input"

export const Numeral = createComponent<{
  value?: number | null
  onValue?: (value: number | null) => void
  decimals?: number
  placeholder?: string
  width?: string
}>(({ value, onValue, decimals, ...props }) => {
  const [stringValue, onStringValue] = useNumberFromString({
    value,
    onValue,
    decimals,
  })
  return Input({
    ...props,
    value: stringValue,
    onValue: onStringValue,
  })
})
