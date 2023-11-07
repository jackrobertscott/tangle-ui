import { createContext, useContext, useEffect, useState } from "react"
import { randomService } from "../utils/randomService"

const LayerContext = createContext<{
  layerIds: string[]
}>({
  layerIds: [],
})

export function useLayer(visible?: boolean) {
  const layerContext = useContext(LayerContext)
  const [id] = useState(() => randomService.string(10))
  const turnOn = () => {
    if (!layerContext.layerIds.includes(id)) {
      layerContext.layerIds.push(id)
    }
  }
  const turnOff = () => {
    if (layerContext.layerIds.includes(id)) {
      layerContext.layerIds = layerContext.layerIds.filter((i) => i !== id)
    }
  }
  useEffect(() => {
    if (visible) turnOn()
    else turnOff()
  }, [visible])
  return {
    isCurrent() {
      return layerContext.layerIds[layerContext.layerIds.length - 1] === id
    },
  }
}
