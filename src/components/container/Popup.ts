import { Fragment, ReactNode, useEffect, useRef, useState } from "react"
import { useLayer } from "../../hooks/useLayer"
import { createComponent, createCssComponent } from "../../utils/component"
import { listenerService } from "../../utils/listenerService"
import { Portal } from "./Portal"

export const Popup = createComponent<{
  renderTrigger: (setOpen: (target: HTMLElement) => void) => ReactNode
  renderContent: (setClosed: () => void) => ReactNode
  maxHeight?: number
}>(({ renderTrigger, renderContent, maxHeight }) => {
  const popupRef = useRef<HTMLDivElement>(null)
  const [rect, setRect] = useState<Record<"x" | "y" | "w" | "h", number>>()
  const layer = useLayer(!!rect)
  useEffect(() => {
    if (!rect) return
    return listenerService.document({
      mousedown: (e) => {
        if (
          layer.isCurrent() &&
          popupRef.current &&
          e.target instanceof HTMLElement &&
          !popupRef.current.contains(e.target)
        ) {
          setRect(undefined)
        }
      },
    })
  }, [rect])
  return Fragment({
    children: [
      renderTrigger((currentTarget) => {
        const i = currentTarget.getBoundingClientRect()
        setRect({ x: i.left, y: i.top, w: i.width, h: i.height })
      }),
      rect &&
        Portal({
          children: PopupWrap({
            ref: popupRef,
            style: {
              top: rect.y,
              left: rect.x,
              width: rect.w,
              minHeight: rect.h,
            },
            children: PopupContent({
              style: { maxHeight },
              children: renderContent(() => setRect(undefined)),
            }),
          }),
        }),
    ],
  })
})

const PopupWrap = createCssComponent("div", (theme) => ({
  zIndex: 100,
  overflow: "auto",
  position: "absolute",
  borderRadius: theme.radius.cell,
  boxShadow: theme.shadow.outer.toString(),
  border: theme.border.outer.toString(),
}))

const PopupContent = createCssComponent("div", (theme) => ({
  overflow: "auto",
  backgroundColor: theme.border.outer.color.toString(),
  gap: theme.border.inner.width,
}))
