import styles from './MainLayout.module.css'

import Head from 'next/head'

import NavBar from "../NavBar";

import { FC } from 'react';

export const MainLayout: FC = ({ children }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>About Franco P</title>
                <meta name="description" content="About NextJS" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavBar />

            <main className={styles.main}>
                {children}
            </main>
        </div>
    )
}
