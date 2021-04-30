import React from 'react'
import Content from '../components/index/Content'
import MainLayout from '../layouts/MainLayout'
import Link from 'next/Link'

interface Props {}

const Index = ({}: Props) => {
  return (
    <>
      <MainLayout>
        <Content />
        <Link href="/about">About page</Link>
      </MainLayout>
    </>
  )
}

export default Index
