import React, { FC } from "react"

interface ButtonProps {
  children: string
  link: string
}

const ButtonGreen: FC<ButtonProps> = ({ children, link }) => {
  return (
    <a className='buttonGreen btn' href={link}>
      {children}
    </a>
  )
}

export default ButtonGreen
