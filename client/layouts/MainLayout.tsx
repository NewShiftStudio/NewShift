import React from 'react'
import Footer from '../shared/Footer/Footer'
import Header from '../shared/Header/Header'
import styles from '../styles/layouts/mainLayout.module.scss'

interface Props {
  children: any
}

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default MainLayout
