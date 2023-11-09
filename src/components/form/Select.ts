import { mdiCheck, mdiUndoVariant } from "@mdi/js"
import { createComponent } from "../../utils/component"
import { fib } from "../../utils/fib"
import { Fragment } from "../container/Fragment"
import { Popup } from "../container/Popup"
import { Icon } from "../display/Icon"
import { Cell } from "./Cell"

export const Select = createComponent<{
  value?: string | null
  onValue?: (value: string | null) => void
  options?: {
    value?: string
    label?: string
  }[]
  required?: boolean
  centered?: boolean
}>(({ value, onValue, options, required, centered }) => {
  const currentOption = !value
    ? null
    : options?.find((i) => i.value === value) ||
      options?.find((i) => i.label === value) // fallback if not value matches
  return Popup({
    maxHeight: fib(14),
    renderTrigger: (setOpen) => {
      return Cell({
        centered,
        children: currentOption?.label ?? currentOption?.value ?? "Select",
        onClick: (e) => setOpen(e.currentTarget),
      })
    },
    renderContent: (setClosed) => [
      Fragment({
        children: options?.map((option) => {
          return Cell({
            key: option.value,
            onClick: () => {
              onValue?.(option.value ?? option.label ?? null)
              setClosed()
            },
            children: [
              option.label,
              currentOption === option && Icon({ icon: mdiCheck }),
            ],
          })
        }),
      }),
      !required &&
        Cell({
          secondary: true,
          children: ["Clear", Icon({ icon: mdiUndoVariant })],
          onClick: () => {
            onValue?.(null)
            setClosed()
          },
        }),
    ],
  })
})
