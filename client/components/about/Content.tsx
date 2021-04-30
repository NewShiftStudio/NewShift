import React from 'react'
import styles from '../../styles/about/Content.module.scss'
import { formatClasses } from '../../utils/formatClass'

interface Props {
  text: string
}

const Content = ({ text }: Props) => {
  return (
    <div className={formatClasses(styles.content, styles.two, styles.three)}>
      Content {text} component
    </div>
  )
}

export default Content
