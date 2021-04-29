import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

interface Props {
  children: any
}

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <div className="container">{children}</div>
      <Footer />
    </>
  )
}

export default MainLayout
