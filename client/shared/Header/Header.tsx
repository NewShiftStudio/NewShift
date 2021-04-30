import React from 'react'
import styles from '../../styles/shared/Header.module.scss'
import { formatClasses } from '../../utils/formatClass'

interface Props {}

const Header = ({}: Props) => {
  const services = [
    { name: 'Первая' },
    { name: 'Вторая ' },
    { name: 'Третья' },
    { name: 'Четрвлваодывл' },
    { name: 'ыфва' },
  ]
  return (
    <header className={formatClasses(styles.header)}>
      {services.map(service => (
        <a key={service.name} className={styles.nav_link}>
          {service.name}
        </a>
      ))}
    </header>
  )
}

export default Header
