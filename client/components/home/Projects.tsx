import Link from 'next/link'
import React from 'react'
import styles from '../../styles/home/Projects.module.scss'
import buttons from '../../styles/buttons/Buttons.module.scss'
import { formatClasses } from '../../utils/formatClass'
interface Props {}

const Header = ({}: Props) => {
  const projects = [
    { src: './images/projects/mpro.png', link: '#' },
    { src: './images/projects/coinjoy.png', link: '#' },
    { src: './images/projects/pomosh.png', link: '#' },
    { src: './images/projects/stealthex.png', link: '#' },
  ]
  return (
    <section className={formatClasses(styles.projects)}>
      <div className={formatClasses('container', styles.container)}>
        <div className={formatClasses(styles.outer)}>
          <div className={formatClasses('block', styles.block)}>
            <h2 className={formatClasses(styles.title)}>
              Реализованные проекты
            </h2>
            <div className={formatClasses(styles.subtitle)}>
              Переводим бизнес в онлайн и создаём новые <br /> каналы продаж. От
              сайтов с приложениями, до <br /> соцсетей и чат-ботов в
              мессенджерах.
            </div>
          </div>
          {projects.map((project) => (
            <div className={formatClasses(styles.block, styles.project_img)}>
              <img src={project.src} alt="" />
            </div>
          ))}

          <div className={formatClasses(styles.block)}>
            <div className={formatClasses(styles.ending)}>
              За годы работы мы разработали множество проектов в различных
              отраслях. Посмотрите остальные наши работы, чтобы убедиться в
              экспертности и качестве услуг.
            </div>
            <button className={formatClasses(buttons.projects_ending_btn)}>
              <div> Перейти в портфолио</div>
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0)">
                  <path
                    d="M2.4071 7.68909L3.63956 8.92155L8.56939 3.99172L8.56939 18.253H10.33L10.33 3.99172L15.2599 8.92155L16.4923 7.68909L9.44972 0.646477L2.4071 7.68909Z"
                    fill="#3BD9AF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect
                      width="17.6065"
                      height="17.6065"
                      fill="white"
                      transform="translate(0.646484 18.253) rotate(-90)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
