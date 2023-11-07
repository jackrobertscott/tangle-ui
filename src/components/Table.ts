import { createComponent } from "../utils/component"
import { fib } from "../utils/fib"
import { getTheme } from "../utils/theme"
import {
  Divider,
  TableBody,
  TableData,
  TableHead,
  TableHeader,
  TableRoot,
  TableRow,
} from "./Static"

export type TableProps = {
  head: string[]
  body: string[][]
}

export const Table = createComponent<TableProps>(({ head, body }) => {
  return TableWrap({
    style: { maxHeight: fib(14) },
    children: [
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
    ],
  })
})

export const TableWrap = Divider.extend(() => {
  const theme = getTheme()
  return {
    overflow: "auto",
    textAlign: "left",
    border: theme.border.outer.toString(),
    table: {
      width: "100%",
    },
    "th, td": {
      padding: fib(6),
      minWidth: fib(11),
      ":not(:first-child)": {
        borderLeft: theme.border.inner.toString(),
      },
    },
    th: {
      top: 0,
      position: "sticky",
      borderBottom: theme.border.inner.toString(),
      backgroundColor: theme.bg.table.shift(10).toString(),
    },
    tr: {
      ":not(:last-child) td": {
        borderBottom: theme.border.inner.toString(),
      },
      ":nth-child(2n) td": {
        backgroundColor: theme.bg.table.shift(5).toString(),
      },
    },
    td: {
      color: theme.fg.secondary.toString(),
      backgroundColor: theme.bg.table.toString(),
      "&.clickable:hover:not(:active)": {
        backgroundColor: theme.bg.table.shift(5).toString(),
      },
    },
  }
})
