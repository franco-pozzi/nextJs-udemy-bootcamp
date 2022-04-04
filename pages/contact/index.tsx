import Link from 'next/link'
import {MainLayout} from '../../components/layouts/MainLayout'

export default function contact() {
  return (
    <MainLayout>
      <h1>Contact Page</h1>
      <h2 className='title'>
        Ir a <Link href="/">Home</Link>
      </h2>
      <h2 className='title'>
        Ir a <Link href="/about">About</Link>
      </h2>

      <p className='description'>
        Get started by editing{' '}
        <code className='code'>pages/about.js</code>
      </p>
    </MainLayout>
  )
}
