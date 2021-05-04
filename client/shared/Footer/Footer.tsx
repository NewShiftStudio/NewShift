import Link from 'next/link'
import React from 'react'
import buttons from '../../styles/buttons/Buttons.module.scss'
import styles from '../../styles/shared/Footer.module.scss'
import { formatClasses } from '../../utils/formatClass'

interface Props {}

const Footer = ({}: Props) => {
  const navigators = [
    { name: 'Веб-разработка', link: 'services', key: '1' },
    { name: 'Мобильные приложения', link: 'about', key: '2' },
    { name: 'Чат-боты', link: '', key: '3' },
    { name: 'Блокчейн', link: '', key: '4' },
    { name: 'Дизайн', link: '', key: '5' },
    { name: 'Продвижение', link: '', key: '6' },
    { name: 'Интеграция', link: '', key: '7' },
  ]
  return (
    <footer className={formatClasses(styles.footer)}>
      <div className="container">
        <div className={formatClasses(styles.outer)}>
          <div className={styles.upper_part}>
            <a
              href="tel:+7 (999) 240-45-20"
              className={formatClasses(styles.phone_num)}
            >
              +7 (999) 240-45-20
            </a>
            <div className={styles.address}>
              Санкт-Петербург, 2-я Советская ул. 27/2, каб. 201/1
            </div>
            <div className={styles.social_btns}>
              <a
                target="_blank"
                href="mailto:"
                className={formatClasses('btn', buttons.social_btn)}
              >
                <svg>
                  <use xlinkHref="/icons/sprite.svg#mail"></use>
                </svg>
              </a>
              <a
                target="_blank"
                href="https://vk.com/newshiftru"
                className={formatClasses('btn', buttons.social_btn)}
              >
                <svg>
                  <use xlinkHref="/icons/sprite.svg#vk"></use>
                </svg>
              </a>
              <a
                target="_blank"
                href="facebook.com"
                className={formatClasses('btn', buttons.social_btn)}
              >
                <svg>
                  <use xlinkHref="/icons/sprite.svg#facebook"></use>
                </svg>
              </a>
              <a
                href="instagram.com"
                className={formatClasses('btn', buttons.social_btn)}
              >
                <svg>
                  <use xlinkHref="/icons/sprite.svg#instagram"></use>
                </svg>
              </a>
            </div>
          </div>
          <div className={styles.bottom_part}>
            <div className={formatClasses(styles.nav_links)}>
              {navigators.map((navigator) => (
                <div className={styles.nav_link}>
                  <Link key={navigator.key} href={'/' + navigator.link}>
                    {navigator.name}
                  </Link>
                </div>
              ))}
            </div>
            <div className={styles.info_blocks}>
              <span
                className={formatClasses(styles.info_block, styles.privacy)}
              >
                <Link href="/privacy">Политика конфиденциальности</Link>
              </span>
              <span className={formatClasses(styles.info_block, styles.cookie)}>
                <Link href="/cookie">Использование куки</Link>
              </span>
              <span
                className={formatClasses(styles.documents, styles.info_block)}
              >
                ИНН 7842178407 | КПП 784201001 | ОГРН 1207800003817
              </span>
              <span
                className={formatClasses(styles.copyright, styles.info_block)}
              >
                © 2021 New Shift
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
