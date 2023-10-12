import { ReactNode } from "react"
import { img1, img2, img3, img4 } from "../../assets/img/main-banner"

interface MainBannerDataInterface {
  suptitle: string
  title: string
  link: string
  btnTitle: string
  img: ReactNode
}

export const mainBannerData: MainBannerDataInterface[] = [
  {
    suptitle: "new collection",
    title: "Meanswear 2022",
    link: "#vsd",
    img: img1,
    btnTitle: "Shop the menswear",
  },
  {
    suptitle: "old collection",
    title: "Womenswear 2022",
    link: "#asc",
    img: img2,
    btnTitle: "Shop the womenswear",
  },
  {
    suptitle: "super collection",
    title: "Meanswear 2045",
    link: "#,jk",
    img: img3,
    btnTitle: "Shop the menswear",
  },
  {
    suptitle: "newest collection",
    title: "Womenswear 2094",
    link: "#nhg",
    img: img4,
    btnTitle: "Shop the womenswear",
  },
]
