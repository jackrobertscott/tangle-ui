import { hsla, shadow } from "css-brewery"
import { createStaticComponent } from "../utils/component"
import { fib } from "../utils/fib"

export const Anchor = createStaticComponent("a")
export const Button = createStaticComponent("button", {
  padding: fib(5),
  cursor: "pointer",
  boxShadow: shadow({
    inset: true,
    spread: 1,
    color: hsla({ l: 100 }),
  }).toString(),
})
export const Divider = createStaticComponent("div")
export const Heading1 = createStaticComponent("h1")
export const Heading2 = createStaticComponent("h2")
export const Heading3 = createStaticComponent("h3")
export const Paragraph = createStaticComponent("p")
export const Span = createStaticComponent("span")
export const Image = createStaticComponent("img")
export const Input = createStaticComponent("input")
export const Label = createStaticComponent("label")
export const Form = createStaticComponent("form")
export const Section = createStaticComponent("section")
export const Article = createStaticComponent("article")
export const Aside = createStaticComponent("aside")
export const Header = createStaticComponent("header")
export const Footer = createStaticComponent("footer")
export const ListItem = createStaticComponent("li")
export const UnorderedList = createStaticComponent("ul")
export const OrderedList = createStaticComponent("ol")
export const TableRoot = createStaticComponent("table")
export const TableHead = createStaticComponent("thead")
export const TableBody = createStaticComponent("tbody")
export const TableRow = createStaticComponent("tr")
export const TableData = createStaticComponent("td")
export const TableHeader = createStaticComponent("th")
export const Iframe = createStaticComponent("iframe")
export const Link = createStaticComponent("link")
