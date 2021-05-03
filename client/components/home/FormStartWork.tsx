import Link from 'next/link'
import React from 'react'
import styles from '../../styles/home/FormStartWork.module.scss'
import buttons from '../../styles/buttons/Buttons.module.scss'
import { formatClasses } from '../../utils/formatClass'
interface Props {}

const Header = ({}: Props) => {
  return (
    <section className={formatClasses(styles.form_start_work)}>
      <div className={formatClasses('container', styles.container)}>
        <div className={formatClasses(styles.outer)}>
          <div className={styles.text}>
            <h2 className={formatClasses(styles.title)}>
              Начнем работу сегодня!
            </h2>
            <div className={formatClasses(styles.subtitle)}>
              Заполните форму, и мы свяжемся с вами в ближайшее время. Или
              напишите нам на электронную почту:
            </div>
            <a
              className={formatClasses(styles.mail)}
              href="mailto:support@newshift.ru"
            >
              support@newshift.ru
            </a>
          </div>
          <form className={formatClasses(buttons.btn_send)} action="">
            <input className={formatClasses(styles.input_name)} type="text" />
            <input className={formatClasses(styles.input_phone)} type="text" />
            <div className={formatClasses('btn', styles.checkbox_wrapper)}>
              <label className={styles.checkbox_label}>
                <input
                  className={formatClasses(styles.checkbox)}
                  type="checkbox"
                />
                <div className={formatClasses(styles.fake_checkbox)}></div>
                <span className={formatClasses('btn', styles.checkbox_text)}>
                  Заполняя форму я согласен на обработку персональных данных
                </span>
              </label>
            </div>
            <button className={formatClasses('btn', buttons.btn_form_send)}>
              Отправить заявку
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Header
