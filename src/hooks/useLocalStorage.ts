import { useState } from "react"
import { useDebounce } from "./useDebounce"

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void] {
  const getStoredValue = (): T => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(
        `Error getting data from localStorage for key "${key}":`,
        error
      )
      return initialValue
    }
  }
  const [value, setValue] = useState<T>(getStoredValue)
  const setItem = useDebounce(500, (key: string, value: string) => {
    localStorage.setItem(key, value)
  })
  const setStoredValue = (newValue: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        newValue instanceof Function ? newValue(value) : newValue
      setItem(key, JSON.stringify(valueToStore))
      setValue(valueToStore)
    } catch (error) {
      console.error(
        `Error setting data to localStorage for key "${key}":`,
        error
      )
    }
  }
  return [value, setStoredValue]
}
