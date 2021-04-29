import React from 'react'
import styles from '../../styles/Header.module.scss'

interface Props {}

const Header = (props: Props) => {
  return (
    <header className={styles.header}>
      <h1>Header</h1>
    </header>
  )
}

export default Header
