import { border, hsla } from "css-brewery"
import { createComponent, createStaticComponent } from "../../utils/component"
import { fib } from "../../utils/fib"

export const Gallery = createComponent(() => {
  return GalleryWrap({
    children: new Array(50).fill(0).map(() => {
      return GalleryCard()
    }),
  })
})

const GalleryWrap = createStaticComponent("div", {
  border: border({ width: 1, color: hsla({ l: 100 }) }).toString(),
  display: "grid",
  gridTemplateRows: "auto",
  gridTemplateColumns: `repeat(auto-fit, minmax(${fib(13)}px, 1fr))`,
  gap: 10,
})

const GalleryCard = createStaticComponent("div", {
  backgroundColor: "green",
  aspectRatio: "16 / 9",
})
