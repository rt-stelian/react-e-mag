import { FC } from "react"
import { HiArrowNarrowRight } from "react-icons/hi"

interface ArrowsInterface {
  className: string
}

const ArrowRight: FC<ArrowsInterface> = ({ className }) => {
  return <HiArrowNarrowRight className={className} />
}

export default ArrowRight
