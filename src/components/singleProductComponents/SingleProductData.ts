import exp from "constants"
import { title } from "process"
//import images from "../../assets/img/singleProducts/basic-hooded-sweatshirt-in-pink"

export interface singleProductData {
  title: string
  price: string
  discount?: string
  article: number
  colors: string[]
  sizes: string[]
  quantity: number
}

export const singleProduct: singleProductData = {
  title: "Basic hooded sweatshirt in pink",
  price: "$15.50",
  article: 183260098,
  colors: ["pink", "blue", "yellow"],
  sizes: ["XS", "S", "M"],
  quantity: 5,
  discount: "-15%",
}
