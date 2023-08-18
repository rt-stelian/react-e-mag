import { ReactElement, ReactNode } from "react"
import {
  LiaFacebookF,
  LiaInstagram,
  LiaTwitter,
  LiaPinterestP,
} from "react-icons/lia"
import { FaYoutube } from "react-icons/fa"
//@ts-ignore
import AppStore from "../../../assets/img/appStoreLogo/app-store.png"
//@ts-ignore
import GooglePlay from "../../../assets/img/appStoreLogo/google-play.png"

export interface FooterDataInterface {
  id?: string
  title?: string
  link: string
  linkTitle?: string
  logo?: ReactElement | ReactNode
}

export const helpColumn: FooterDataInterface[] = [
  {
    title: "Delivery & returns",
    link: "bdfb",
  },
  {
    title: "FAQ",
    link: "bdfn",
  },
  {
    title: "Track order",
    link: "fdnfgn",
  },
  {
    title: "Contacts",
    link: "nfd",
  },
  {
    title: "Blog",
    link: "mgfn",
  },
]

export const shopColumn: FooterDataInterface[] = [
  {
    title: "New arrivals",
    link: "kbfm",
  },
  {
    title: "Trending now",
    link: "ym35",
  },
  {
    title: "Sales",
    link: "nm52f",
  },
  {
    title: "Brands",
    link: "5dbf24",
  },
]

export const getInColumn: FooterDataInterface[] = [
  {
    title: "Call: ",
    linkTitle: "(405) 555-0128",
    link: "4055550128",
  },
  {
    title: "Email: ",
    linkTitle: "hello@createx.com",
    link: "hello@createx.com",
  },
]

export const socialMedia: FooterDataInterface[] = [
  { logo: <LiaFacebookF />, link: "facebook" },
  { logo: <LiaInstagram />, link: "insta" },
  { logo: <LiaTwitter />, link: "twitt" },
  { logo: <FaYoutube />, link: "yotube" },
  { logo: <LiaPinterestP />, link: "pinterest" },
]

export const downApp: FooterDataInterface[] = [
  {
    logo: <img src={AppStore} />,
    link: "appstore",
  },
  {
    logo: <img src={GooglePlay} />,
    link: "googlePlay",
  },
]
