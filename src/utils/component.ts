import { CSSInterpolation, css } from "@emotion/css"
import { FC, ReactNode } from "react"
import { ElementProps, createElement } from "./element"

type PropsOrChildrenType<T> = ElementProps<T> extends infer R
  ? R extends { children?: ReactNode }
    ? R | ReactNode
    : R
  : never

type StaticCssValueType = (() => CSSInterpolation) | CSSInterpolation

const convertChildrenProps = (props: any): any => {
  return typeof props === "object" && props !== null && !Array.isArray(props)
    ? props
    : { children: props }
}

const appendPropsClass = (props: any, staticClass: string) => {
  props.class = props.class
    ? Array.isArray(props.class)
      ? [staticClass, ...props.class]
      : [staticClass, props.class]
    : staticClass
}

export function createStaticComponent<T extends string>(
  tag: T,
  cssValue: StaticCssValueType = {}
) {
  const cssObject = typeof cssValue === "function" ? cssValue() : cssValue
  const staticClass = css(cssObject)
  const component = function (props?: PropsOrChildrenType<typeof tag>) {
    const newProps = convertChildrenProps(props)
    appendPropsClass(newProps, staticClass)
    return createElement(tag, newProps)
  }
  component.extend = function (extendValue: StaticCssValueType) {
    const extendObject =
      typeof extendValue === "function" ? extendValue() : extendValue
    return createStaticComponent(tag, [cssObject, extendObject])
  }
  return component
}

export function createComponent<P extends {}>(tag: FC<P>) {
  return function (props?: PropsOrChildrenType<typeof tag>) {
    return createElement(tag, convertChildrenProps(props))
  }
}
