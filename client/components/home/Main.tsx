import Link from 'next/link'
import React from 'react'
import styles from '../../styles/home/Main.module.scss'
import buttons from '../../styles/buttons/Buttons.module.scss'
import { formatClasses } from '../../utils/formatClass'
interface Props {}

const Main = ({}: Props) => {
  return (
    <section className={formatClasses(styles.main)}>
      <div className={formatClasses('container', styles.container)}>
        <div className={formatClasses(styles.outer)}>
          <h1 className={formatClasses(styles.title)}>
            New Shift <span>—</span> ваш выход в онлайн
          </h1>

          <button className={formatClasses('btn', buttons.btn_start)}>
            Начать бесплатно
          </button>
        </div>
        <img
          src="/images/shared/phone-in-hands1x1.png"
          className={formatClasses(styles.flying_phone)}
        />
      </div>
    </section>
  )
}

export default Main
