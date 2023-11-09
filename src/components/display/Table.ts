import { CSSObject } from "@emotion/css"
import { createComponent, createStaticComponent } from "../../utils/component"
import { fib } from "../../utils/fib"
import { ThemeType } from "../../utils/theme"

export type TableProps = {
  head: string[]
  body: string[][]
}

export const Table = createComponent<TableProps>(({ head, body }) => {
  return TableWrap([
    TableScrollWrap([
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
    ]),
  ])
})

const TableWrap = createStaticComponent("div", (theme) => ({
  display: "flex",
  flexDirection: "column",
  overflow: "auto",
  borderRadius: fib(5),
  border: theme.border.outer.toString(),
}))

const TableScrollWrap = createStaticComponent("div", {
  overflow: "auto",
})

const TableRoot = createStaticComponent("table", {
  minWidth: "100%",
  textAlign: "left",
  maxHeight: fib(14),
})

const TableHead = createStaticComponent("thead")

const TableBody = createStaticComponent("tbody")

const TableRow = createStaticComponent("tr", (theme) => ({
  ":not(:last-child) td": {
    borderBottom: theme.border.inner.toString(),
  },
  ":nth-child(2n) td": {
    backgroundColor: theme.bg.cell.shift(5).toString(),
  },
}))

const TableData = createStaticComponent("td", (theme) => [
  tableCellCss(theme),
  {
    color: theme.fg.secondary.toString(),
    backgroundColor: theme.bg.cell.toString(),
    "&.clickable:hover:not(:active)": {
      backgroundColor: theme.bg.cell.shift(5).toString(),
    },
  },
])

const TableHeader = createStaticComponent("th", (theme) => [
  tableCellCss(theme),
  {
    top: 0,
    position: "sticky",
    borderBottom: theme.border.inner.toString(),
    backgroundColor: theme.bg.cell.shift(10).toString(),
  },
])

function tableCellCss(theme: ThemeType): CSSObject {
  return {
    padding: fib(6),
    minWidth: fib(11),
    ":not(:first-child)": {
      borderLeft: theme.border.inner.toString(),
    },
  }
}
