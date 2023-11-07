import { useEffect, useState } from "react"

export function useDragThreshold(onDragThresholdExceeded: () => void) {
  const [initialPosition, setInitialPosition] = useState<{
    x: number
    y: number
  }>()
  useEffect(() => {
    if (!initialPosition) return
    const handleMouseMove = (moveEvent: MouseEvent) => {
      const dx = moveEvent.clientX - (initialPosition?.x || 0)
      const dy = moveEvent.clientY - (initialPosition?.y || 0)
      if (Math.sqrt(dx * dx + dy * dy) > 10) {
        onDragThresholdExceeded()
        window.removeEventListener("mousemove", handleMouseMove)
      }
    }
    const handleMouseEnd = () => {
      setInitialPosition(undefined)
    }
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseup", handleMouseEnd)
    window.addEventListener("mouseleave", handleMouseEnd)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseEnd)
      window.removeEventListener("mouseleave", handleMouseEnd)
    }
  }, [initialPosition])
  return (e: MouseEvent) => {
    setInitialPosition({ x: e.clientX, y: e.clientY })
  }
}
