import Link from 'next/link'
import React from 'react'
import Content from '../components/about/Content'
import MainLayout from '../layouts/MainLayout'

import styles from '../../styles/about/About.module.scss'

interface Props {}

const About = ({}: Props) => {
  return (
    <>
      <MainLayout>
        <Content text="fdsaf" />
        <Link href="/">Index page</Link>
      </MainLayout>
    </>
  )
}

export default About
