import React from "react"
import { Link as GatsbyLink } from "gatsby"
import colors from "../colors"
import { useHover } from "../hooks/useHover"

export const Link = props => {
  const [hoverRef, isHovered] = useHover()

  return (
    <GatsbyLink
      {...props}
      ref={hoverRef}
      style={{
        color: isHovered ? colors.link : colors.bodyText,
        textDecoration: isHovered ? `underline` : `none`,
      }}
    />
  )
}