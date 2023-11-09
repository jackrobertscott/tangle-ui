import { mdiChevronLeft, mdiChevronRight } from "@mdi/js"
import { useState } from "react"
import { createComponent } from "../../utils/component"
import { DAYS_LONG, MONTHS_LONG } from "../../utils/dateConstants"
import { getTheme } from "../../utils/theme"
import { Popup } from "../container/Popup"
import { Table } from "../display/Table"
import { Cell } from "./Cell"
import { Field } from "./Field"
import { Form } from "./Form"
import { Select } from "./Select"

export const DatePicker = createComponent<{
  value?: string | number | Date | null
  onValue?: (value: string | null) => void
  min?: string | number | Date
  max?: string | number | Date
}>(({ value: _value, onValue: _onValue, min: _min, max: _max }) => {
  const theme = getTheme()
  const valueDate = _value ? new Date(_value) : undefined
  const minDate = _min ? new Date(_min) : new Date()
  const maxDate = _max ? new Date(_max) : new Date()
  if (!_min) minDate.setFullYear(2010)
  if (!_max) maxDate.setFullYear(2030)
  if (minDate.valueOf() > maxDate.valueOf())
    throw new Error("Max year can not be before min year")
  const cloneValueDate = () => (valueDate ? new Date(valueDate) : new Date())
  const [viewDate, setViewDate] = useState(cloneValueDate)
  const onValue = _onValue
    ? (d: Date) => {
        if (minDate.valueOf() >= d.valueOf()) {
          _onValue?.(minDate.toISOString())
        } else if (d.valueOf() >= maxDate.valueOf()) {
          _onValue?.(maxDate.toISOString())
        } else {
          _onValue?.(d.toISOString())
        }
      }
    : undefined
  const formatDate = (d: Date) =>
    d.toLocaleString(navigator.language || "en-au", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  return Popup({
    renderTrigger: (setOpen) =>
      Cell({
        children: valueDate ? formatDate(valueDate) : "Select",
        onClick: (e) => setOpen(e.currentTarget),
      }),
    renderContent: (setClosed) =>
      Form({
        children: [
          Field({
            label: "Year",
            children: [
              Cell({
                hug: true,
                icon: mdiChevronLeft,
                disabled: minDate.getFullYear() >= viewDate.getFullYear(),
                onClick: () => {
                  const d = new Date(viewDate)
                  d.setFullYear(d.getFullYear() - 1)
                  setViewDate(d)
                },
              }),
              Select({
                centered: true,
                required: true,
                value: viewDate.getFullYear().toString(),
                onValue: (i) => {
                  if (!i) return
                  const d = new Date(viewDate)
                  d.setFullYear(minDate.getFullYear() + parseInt(i))
                  setViewDate(d)
                },
                options: new Array(
                  maxDate.getFullYear() - minDate.getFullYear() + 1
                )
                  .fill(0)
                  .map((_, index) => ({
                    value: index.toString(),
                    label: (minDate.getFullYear() + index).toString(),
                  })),
              }),
              Cell({
                hug: true,
                icon: mdiChevronRight,
                disabled:
                  valueDate && valueDate.getFullYear() >= maxDate.getFullYear(),
                onClick: () => {
                  const d = new Date(viewDate)
                  d.setFullYear(d.getFullYear() + 1)
                  setViewDate(d)
                },
              }),
            ],
          }),
          Field({
            label: "Month",
            children: [
              Cell({
                hug: true,
                icon: mdiChevronLeft,
                onClick: () => {
                  const d = new Date(viewDate)
                  d.setMonth(d.getMonth() - 1)
                  setViewDate(d)
                },
              }),
              Select({
                centered: true,
                required: true,
                value: viewDate.getMonth().toString(),
                onValue: (i) => {
                  if (!i) return
                  const d = new Date(viewDate)
                  d.setMonth(+i)
                  setViewDate(d)
                },
                options: MONTHS_LONG.map((month, index) => ({
                  value: index.toString(),
                  label: month,
                })),
              }),
              Cell({
                hug: true,
                icon: mdiChevronRight,
                onClick: () => {
                  const d = new Date(viewDate)
                  d.setMonth(d.getMonth() + 1)
                  setViewDate(d)
                },
              }),
            ],
          }),
          Field({
            label: "Date",
            children: Table({
              centered: true,
              head: DAYS_LONG.map((day) => day.slice(0, 2)),
              body: new Array(6).fill(0).map((_, weekIndex) => {
                const weekStart = new Date(viewDate)
                weekStart.setDate(1)
                weekStart.setDate(weekIndex * 7 + 1 - weekStart.getDay())
                return new Array(7).fill(0).map((_, dayIndex) => {
                  const day = new Date(weekStart)
                  day.setDate(weekStart.getDate() + dayIndex)
                  const isCurrent =
                    day.toLocaleDateString() === valueDate?.toLocaleDateString()
                  return {
                    label: day.getDate().toString(),
                    bg: isCurrent ? theme.bg.cell.toString() : undefined,
                    fg: isCurrent ? theme.fg.primary.toString() : undefined,
                    onClick: () => {
                      const d = cloneValueDate()
                      d.setFullYear(day.getFullYear())
                      d.setMonth(day.getMonth())
                      d.setDate(day.getDate())
                      onValue?.(d)
                    },
                  }
                })
              }),
            }),
          }),
        ],
      }),
  })
})
