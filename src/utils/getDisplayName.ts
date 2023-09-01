import {ReactElement, FC} from "react";

export const getDisplayName = (element?: ReactElement) => {
  return element ? (element.type as FC).displayName : ''
}