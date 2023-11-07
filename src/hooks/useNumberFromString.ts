import { useCallback, useState } from "react"

export function useNumberFromString({
  value,
  onValue,
  decimals,
}: {
  value?: number | null
  onValue?: (value: number | null) => void
  decimals?: number
}) {
  const [stringValue, setStringValue] = useState<string | null>(() => {
    return value !== null && value !== undefined
      ? decimals !== undefined
        ? value.toFixed(decimals)
        : value.toString()
      : null
  })
  const isValidNumberString = (str: string): boolean => {
    if (decimals !== undefined)
      return new RegExp(`^-?\\d*\\.?\\d{0,${decimals}}$`).test(str)
    return /^-?\d*\.?\d*$/.test(str)
  }
  const handleValueChange = useCallback(
    (newValue: string | null) => {
      if (newValue !== null && isValidNumberString(newValue)) {
        setStringValue(newValue)
        const parsedValue = parseFloat(newValue)
        onValue?.(isNaN(parsedValue) ? null : parsedValue)
      } else if (newValue === null) {
        setStringValue(null)
        onValue?.(null)
      }
    },
    [onValue, decimals]
  )
  return [stringValue, handleValueChange] as const
}
