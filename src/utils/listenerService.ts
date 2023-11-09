export const listenerService = {
  element<T extends HTMLElementEventMap, K extends keyof T>(
    event: HTMLElement | undefined | null,
    listenerMap: Record<K, (event: T[K]) => void>
  ) {
    for (const name in listenerMap)
      event?.addEventListener(name, listenerMap[name] as EventListener)
    return () => {
      for (const name in listenerMap)
        event?.removeEventListener(name, listenerMap[name] as EventListener)
    }
  },

  document<T extends DocumentEventMap, K extends keyof T>(
    listenerMap: Record<K, (event: T[K]) => void>
  ) {
    for (const name in listenerMap)
      document?.addEventListener(name, listenerMap[name] as EventListener)
    return () => {
      for (const name in listenerMap)
        document?.removeEventListener(name, listenerMap[name] as EventListener)
    }
  },

  window<T extends WindowEventMap, K extends keyof T>(
    listenerMap: Record<K, (event: T[K]) => void>
  ) {
    for (const name in listenerMap)
      window?.addEventListener(name, listenerMap[name] as EventListener)
    return () => {
      for (const name in listenerMap)
        window?.removeEventListener(name, listenerMap[name] as EventListener)
    }
  },
}
