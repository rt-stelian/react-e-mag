import { ReactNode } from "react"
import {
  cap,
  babyRomp,
  babyShoes,
  earRings,
  jeans,
  sunglasses,
  hoodee,
} from "../../assets/img/new-arrivals"

interface NewArrivalsData {
  title: string
  link: string
  price: string
  img: string
}

const currency: string = "$"

export const newArrivalsData: NewArrivalsData[] = [
  {
    title: "Black and white sport cap",
    link: "#vsd",
    img: cap,
    price: `${currency}18.15`,
  },
  {
    title: "Green baby romper",
    link: "#asc",
    img: babyRomp,
    price: `${currency}20.40`,
  },
  {
    title: "Baby shoes with laces",
    link: "#,jk",
    img: babyShoes,
    price: `${currency}30.60`,
  },
  {
    title: "Basic hooded sweatshirt in pink",
    link: "#ewher",
    img: hoodee,
    price: `${currency}15.95`,
  },
  {
    title: "Mid-rise slim cropped fit jeans",
    link: "#hryhserawe",
    img: jeans,
    price: `${currency}40.00`,
  },
  {
    title: "Metal bridge sunglasses",
    link: "#g4rer5",
    img: sunglasses,
    price: `${currency}89.95`,
  },
  {
    title: "Black and white sport cap",
    link: "#v5sd",
    img: cap,
    price: `${currency}18.15`,
  },
  {
    title: "Green baby romper",
    link: "#5asc",
    img: babyRomp,
    price: `${currency}20.40`,
  },
  {
    title: "Baby shoes with laces",
    link: "#,j5k",
    img: babyShoes,
    price: `${currency}30.60`,
  },
  {
    title: "Red dangle earrings",
    link: "#e5wher",
    img: earRings,
    price: `${currency}29.95`,
  },
  {
    title: "Mid-rise slim cropped fit jeans",
    link: "#hryhse5rawe",
    img: jeans,
    price: `${currency}40.00`,
  },
  {
    title: "Metal bridge sunglasses",
    link: "#g4r5er",
    img: sunglasses,
    price: `${currency}89.95`,
  },
]
