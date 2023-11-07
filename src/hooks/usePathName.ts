import { useEffect, useState } from "react"
import { urlStateManager } from "../utils/urlStateManager"

export const usePathName = () => {
  const getPathName = () => location.pathname
  const [_pathName, _setPathName] = useState(getPathName)
  useEffect(() => {
    return urlStateManager.addUrlChangeListener(() => {
      _setPathName(getPathName())
    })
  }, [])
  const setPathName = (pathName: string) => {
    urlStateManager.pushUrl(pathName)
  }
  return [_pathName, setPathName] as const
}
