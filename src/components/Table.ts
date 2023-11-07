import { CSSObject } from "@emotion/css"
import { createComponent, createStaticComponent } from "../utils/component"
import { fib } from "../utils/fib"
import { getTheme } from "../utils/theme"

export type TableProps = {
  head: string[]
  body: string[][]
}

export const Table = createComponent<TableProps>(({ head, body }) => {
  return TableWrap([
    TableRoot([
      TableHead([
        TableRow({
          children: head.map((data) => {
            return TableHeader(data)
          }),
        }),
      ]),
      TableBody({
        children: body.map((row) => {
          return TableRow({
            children: row.map((data) => {
              return TableData(data)
            }),
          })
        }),
      }),
    ]),
  ])
})

export const TableWrap = createStaticComponent("div", () => {
  const theme = getTheme()
  return {
    overflow: "auto",
    textAlign: "left",
    border: theme.border.outer.toString(),
    maxHeight: fib(14),
  }
})

export const TableRoot = createStaticComponent("table", {
  width: "100%",
})

export const TableHead = createStaticComponent("thead")

export const TableBody = createStaticComponent("tbody")

export const TableRow = createStaticComponent("tr", () => {
  const theme = getTheme()
  return {
    ":not(:last-child) td": {
      borderBottom: theme.border.inner.toString(),
    },
    ":nth-child(2n) td": {
      backgroundColor: theme.bg.table.shift(5).toString(),
    },
  }
})

export const TableData = createStaticComponent("td", () => {
  const theme = getTheme()
  return [
    tableCellCss(),
    {
      color: theme.fg.secondary.toString(),
      backgroundColor: theme.bg.table.toString(),
      "&.clickable:hover:not(:active)": {
        backgroundColor: theme.bg.table.shift(5).toString(),
      },
    },
  ]
})

export const TableHeader = createStaticComponent("th", () => {
  const theme = getTheme()
  return [
    tableCellCss(),
    {
      top: 0,
      position: "sticky",
      borderBottom: theme.border.inner.toString(),
      backgroundColor: theme.bg.table.shift(10).toString(),
    },
  ]
})

function tableCellCss(): CSSObject {
  const theme = getTheme()
  return {
    padding: fib(6),
    minWidth: fib(11),
    ":not(:first-child)": {
      borderLeft: theme.border.inner.toString(),
    },
  }
}
