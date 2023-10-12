import { ReactNode } from "react"
import { womens, mens, kids } from "../../assets/img/categories-cards"

interface CategoriesCardInterface {
  title: string
  link: string
  img: string
}

export const CategoriesCardsData: CategoriesCardInterface[] = [
  {
    title: "Women's",
    link: "dasd",
    img: womens,
  },
  {
    title: "Men's",
    link: "davsssd",
    img: mens,
  },
  {
    title: "Kid's",
    link: "dasssdcd",
    img: kids,
  },
]
