import { useState } from "react"

/**
 * useObjectState - a hook to manage object properties.
 */
export function useObjectState<T>(
  initialObject: { [K in keyof T]?: T[K] | null } = {}
) {
  const [objectState, setObjectState] = useState(initialObject)

  /**
   * setProperty - function to set/update a specific property of the object.
   */
  const createPropertySetter = <K extends keyof T>(key: K) => {
    return (value: T[K] | null) => {
      setObjectState((prevState) => ({
        ...prevState,
        [key]: value,
      }))
    }
  }

  return [objectState, createPropertySetter, setObjectState] as const
}
