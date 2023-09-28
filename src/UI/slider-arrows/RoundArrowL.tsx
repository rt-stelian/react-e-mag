import { FC } from "react"
import { HiArrowNarrowLeft } from "react-icons/hi"

interface ArrowsInterface {
  className: string
}

const ArrowLeft: FC<ArrowsInterface> = ({ className }) => {
  return <HiArrowNarrowLeft className={className} />
}

export default ArrowLeft
