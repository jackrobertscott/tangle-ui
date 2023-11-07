import { useCallback, useRef } from "react"
import { debounce } from "../utils/debounce"

export function useDebounce<T extends (...args: any[]) => void>(
  wait: number,
  cb: T
): T {
  const callbackRef = useRef(cb)
  callbackRef.current = cb
  return useCallback(
    (...args: any[]) => {
      debounce(wait, () => {
        callbackRef.current(...args)
      })(...args)
    },
    [wait]
  ) as T
}
