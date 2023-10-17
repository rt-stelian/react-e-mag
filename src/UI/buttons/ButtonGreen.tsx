import React, { FC, ReactNode } from "react"
import "./btn-styles.css"

interface ButtonProps {
  children: string | ReactNode
  link: string
  className: string
}

const ButtonGreen: FC<ButtonProps> = ({ children, link, className }) => {
  return (
    <a className={`buttonGreen btn ${className}`} href={link}>
      {children}
    </a>
  )
}

export default ButtonGreen
