import React, { FC } from "react"

interface ButtonProps {
  children: string
  link: string
}

const ButtonVide: FC<ButtonProps> = ({ children, link }) => {
  return (
    <a className='buttonVid btn' href={link}>
      {children}
    </a>
  )
}

export default ButtonVide
