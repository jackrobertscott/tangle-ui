import {
  batch,
  computed,
  effect,
  signal,
  untracked,
} from "@preact/signals-react"

export function createSignal<T>(initial: T) {
  const state = signal<T>(initial)
  const getState = () => state.value
  const setState = (value: T) => (state.value = value)
  return [getState, setState, state] as const
}

export function createComputed<T>(cb: () => T) {
  const state = computed(cb)
  const getState = () => state.value
  return [getState, state] as const
}

export function createEffect(cb: () => void): () => void {
  return effect(cb) // returns a dispose (unlisten) function
}

export function runUntracked<T>(cb: () => T) {
  return untracked(cb)
}

export function runBatch(cb: () => void) {
  batch(cb)
}
