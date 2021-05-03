import Link from 'next/link'
import React from 'react'
import styles from '../../styles/shared/Header.module.scss'
import { formatClasses } from '../../utils/formatClass'

interface Props {}

const Header = ({}: Props) => {
  const navigators = [
    { name: 'Услуги', link: 'services', key: '1' },
    { name: 'О нас ', link: 'about', key: '2' },
    { name: 'Бизнесу', link: '', key: '3' },
    { name: 'Кейсы', link: '', key: '4' },
    { name: 'Блог', link: '', key: '5' },
    { name: 'Контакты', link: '', key: '6' },
  ]
  return (
    <header className={formatClasses(styles.header)}>
      <div className="container">
        <div className={formatClasses(styles.outer)}>
          <div className={formatClasses(styles.burger_btn)}>
            <span></span>
          </div>
          <div className={formatClasses(styles.logo_wrapper)}>
            <Link key="home" href="/home">
              <img
                src="/images/shared/logo.png"
                className={formatClasses(styles.logo_img)}
              />
            </Link>
          </div>
          <div className={formatClasses(styles.nav_links)}>
            {navigators.map((navigator) => (
              <div className={styles.nav_link}>
                <Link key={navigator.key} href={'/' + navigator.link}>
                  {navigator.name}
                </Link>
              </div>
            ))}
          </div>
          <a
            href="tel:+7 (999) 240-45-20"
            className={formatClasses(styles.phone_num)}
          >
            <img src="/icons/call.svg" alt="" />
            <span>+7 (999) 240-45-20</span>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
