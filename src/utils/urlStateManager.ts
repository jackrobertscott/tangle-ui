class UrlStateManager {
  private listeners: Array<() => void> = []

  constructor() {
    window.addEventListener("popstate", this.notifyListeners.bind(this))
  }

  /** Function to update the URL without causing a page reload */
  pushUrl(url: string) {
    window.history.pushState({}, "", url)
    this.notifyListeners()
  }

  /** Function to replace the current URL without causing a page reload */
  replaceUrl(url: string) {
    window.history.replaceState({}, "", url)
    this.notifyListeners()
  }

  /** Add a listener for URL changes */
  addUrlChangeListener(listener: () => void) {
    this.listeners.push(listener)
  }

  /** Remove a listener */
  removeUrlChangeListener(listener: () => void) {
    const index = this.listeners.indexOf(listener)
    if (index > -1) {
      this.listeners.splice(index, 1)
    }
  }

  /** Notify listeners of the URL change */
  private notifyListeners() {
    for (const listener of this.listeners) {
      listener()
    }
  }
}

export const urlStateManager = new UrlStateManager()
