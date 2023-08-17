import React, { FC } from "react"
import { RiSearchLine } from "react-icons/ri"

import styles from "./Style.module.css"

const SearchForm: FC = () => {
  return (
    <form className={styles.searchForm}>
      <input
        type='text'
        name='search'
        id='search'
        placeholder='Search for products...'
      />
      <button
        onClick={(e) => e.preventDefault()}
        className={styles.searchBtn}
        title='search'>
        <RiSearchLine />
      </button>
    </form>
  )
}

export default SearchForm
