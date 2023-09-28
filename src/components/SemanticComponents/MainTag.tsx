import { FC, ReactNode } from "react"

interface MainTagProps {
  children?: ReactNode
}

const MainTag: FC<MainTagProps> = ({ children }) => {
  return <main>{children}</main>
}

export default MainTag
