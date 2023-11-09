import { css } from "@emotion/css"
import React, {
  Attributes,
  ComponentClass,
  FC,
  HTMLProps,
  LegacyRef,
  ReactElement,
  ReactNode,
  SVGProps,
} from "react"

type CSSProps<T extends {}> = Omit<T, "class" | "className" | "css"> & {
  // css?: CSSInterpolation // bad practise
  class?: string | (string | undefined | null)[]
  ref?: LegacyRef<any>
}

export type ElementProps<T> = T extends keyof HTMLElementTagNameMap
  ? CSSProps<HTMLProps<HTMLElementTagNameMap[T]>>
  : T extends keyof SVGElementTagNameMap
  ? CSSProps<SVGProps<SVGElementTagNameMap[T]>>
  : T extends FC<infer P>
  ? P & Attributes
  : T extends ComponentClass<infer P>
  ? P & Attributes
  : {}

export function createElement<
  T extends string | FC<any> | ComponentClass<any, any>
>(
  tag: T,
  props?: ElementProps<T> | null,
  ...children: ReactNode[]
): ReactElement<ElementProps<T>> {
  if (props) {
    if (typeof tag === "string") {
      props.className = (props.css ? [css(props.css)] : [])
        .concat(props.className)
        .concat(props.class)
        .filter(Boolean)
        .join(" ")
      delete props.css
      delete props.class
    }
  }
  children = children.concat(props?.children)
  return React.createElement(tag, props, ...children)
}
