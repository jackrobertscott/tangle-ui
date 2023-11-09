import { CSSObject } from "@emotion/css"
import { MouseEventHandler } from "react"
import { createComponent, createCssComponent } from "../../utils/component"
import { fib } from "../../utils/fib"
import { ThemeType } from "../../utils/theme"

export const Table = createComponent<{
  head: string[]
  body: (string | { label: string; onClick?: MouseEventHandler })[][]
  centered?: boolean
}>(({ head, body, centered }) => {
  return TableWrap([
    TableScrollWrap([
      TableRoot([
        TableHead({
          style: { textAlign: centered ? "center" : undefined },
          children: [
            TableRow({
              children: head.map((data) => {
                return TableHeader(data)
              }),
            }),
          ],
        }),
        TableBody({
          children: body.map((row) => {
            return TableRow({
              children: row.map((data) => {
                const style = {
                  textAlign: centered ? "center" : undefined,
                } as const
                if (typeof data === "string") {
                  return TableData({
                    style,
                    children: data,
                  })
                }
                return TableData({
                  style,
                  children: data.label,
                  onClick: data.onClick,
                })
              }),
            })
          }),
        }),
      ]),
    ]),
  ])
})

const TableWrap = createCssComponent("div", (theme) => ({
  display: "flex",
  flexDirection: "column",
  overflow: "auto",
  borderRadius: fib(5),
  border: theme.border.outer.toString(),
}))

const TableScrollWrap = createCssComponent("div", {
  overflow: "auto",
})

const TableRoot = createCssComponent("table", {
  minWidth: "100%",
  textAlign: "left",
  maxHeight: fib(14),
})

const TableHead = createCssComponent("thead")

const TableBody = createCssComponent("tbody")

const TableRow = createCssComponent("tr", (theme) => ({
  ":not(:last-child) td": {
    borderBottom: theme.border.inner.toString(),
  },
  ":nth-child(2n) td": {
    backgroundColor: theme.bg.cell.shift(5).toString(),
  },
}))

const TableData = createCssComponent("td", (theme) => [
  tableCellCss(theme),
  {
    color: theme.fg.secondary.toString(),
    backgroundColor: theme.bg.cell.toString(),
    "&.clickable:hover:not(:active)": {
      backgroundColor: theme.bg.cell.shift(5).toString(),
    },
  },
])

const TableHeader = createCssComponent("th", (theme) => [
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
