export function debounce(
  wait: number,
  cb: (...args: any[]) => void
): (...args: any[]) => void {
  let timeout: ReturnType<typeof setTimeout>
  return function (...args: any[]) {
    const later = () => {
      clearTimeout(timeout)
      cb(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}
