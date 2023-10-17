import React, { FC, ReactNode } from "react"
import "./btn-styles.css"

interface ButtonProps {
  children: string | ReactNode
  link: string
  className: string
}

const ButtonVide: FC<ButtonProps> = ({ children, link, className }) => {
  return (
    <a className={`buttonVid btn ${className}`} href={link}>
      {children}
    </a>
  )
}

export default ButtonVide
