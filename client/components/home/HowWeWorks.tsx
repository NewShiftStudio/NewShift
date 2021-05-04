import Link from 'next/link'
import React from 'react'
import styles from '../../styles/home/HowWeWorks.module.scss'
import buttons from '../../styles/buttons/Buttons.module.scss'
import { formatClasses } from '../../utils/formatClass'
interface Props {}

const HowWeWorks = ({}: Props) => {
  const cards = [
    {
      title: 'Аудит проекта и анализ рынка',
      text:
        'Анализируем проект и предлагаем способ решения задачи, проводим исследование конкурентов',
    },
    {
      title: 'Планирование и разработка',
      text:
        'Предлагаем поэтапный график работ, рисуем макеты, пишем код и создаём первоклассный продукт',
    },
    {
      title: 'Тестирование на ошибки',
      text:
        'Проводим различные виды тестов, чтобы точно проверить работоспособность продукта',
    },
    {
      title: 'Сдача готового продукта',
      text: 'Готовый проект со всеми доступами и сопровождающими документами',
    },
    {
      title: 'Поддержка и продвижение',
      text:
        'Обеспечим техническое сопровождение и консультацию ваших специалистов',
    },
  ]
  return (
    <section className={formatClasses(styles.how_we_works)}>
      <div className={formatClasses('container', styles.container)}>
        <div className={formatClasses(styles.outer)}>
          <h2 className={formatClasses(styles.title)}>
            Как мы будем работать с вами?
          </h2>
          <ul className={formatClasses(styles.working_cards)}>
            {cards.map((card, i) => (
              <li className={formatClasses(styles.card)}>
                <div className={formatClasses(styles.card_number)}>
                  0{i + 1}
                </div>
                <div className={formatClasses(styles.card_content_wrapper)}>
                  <div className={formatClasses(styles.card_title)}>
                    {card.title}
                  </div>
                  <div className={formatClasses(styles.card_text)}>
                    {card.text}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.flying_hand}>
        <img
          src="/images/shared/hand-with-ellipse1x1.png"
          className={styles.flying_hand__img}
        />
        <div className={styles.flying_hand__ellipse_big}></div>
        <div className={styles.flying_hand__ellipse_small}></div>
      </div>
    </section>
  )
}

export default HowWeWorks
