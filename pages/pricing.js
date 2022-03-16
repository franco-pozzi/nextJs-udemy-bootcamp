import MainLayout from "../components/layouts/MainLayout";

import Link from "next/dist/client/link";

export default function pricing() {
  return (
    <MainLayout>
      <h1>Pricing Page</h1>
      <h3 className='title'>
        Ir a <Link href="/">Home</Link>
      </h3>
      <h3 className='title'>
        Ir a <Link href="/contact">Contact</Link>
      </h3>
      <h3 className='title'>
        Ir a <Link href="/about">About</Link>
      </h3>

      <p className='description'>
        Get started by editing{' '}
        <code className='code'>pages/index.js</code>
      </p>
    </MainLayout>
  )
}
