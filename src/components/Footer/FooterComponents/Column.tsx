import React, { FC } from "react"
import { FooterDataInterface } from "../FooterData/FooterData"

interface FooterColumnProps {
  columnData: FooterDataInterface[]
  columnTitle?: string
  socialMedia?: FooterDataInterface[]
  className: string
  socialClassName?: string
}

const Column: FC<FooterColumnProps> = ({
  columnData,
  columnTitle,
  socialMedia,
  className,
  socialClassName,
}) => {
  return (
    <div className={className}>
      <h3 className='title'>{columnTitle}</h3>
      <ul>
        {columnData.map((item) => (
          <li key={item.link}>
            {item.linkTitle ? <span>{item.title}</span> : null}
            <a href={item.link} target={item.logo ? "_blank" : ""}>
              {item.linkTitle || item.logo
                ? item.linkTitle || item.logo
                : item.title}
            </a>
          </li>
        ))}
      </ul>

      {socialMedia ? (
        <ul className={socialClassName}>
          {socialMedia?.map((item) => (
            <li key={item.link}>
              <a href={item.link} target='_blank'>
                {item.logo}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

export default Column
