import React, { FC } from 'react'
import Head from 'next/head'
import { Navbar } from '../Navbar';


import styles from './MainLayout.module.css'

type ComponentNameProps = {
  children: React.ReactNode;
};

export const MainLayout: FC <ComponentNameProps> = ({children}) => {
    return (
        <>
          <Head>
            <title>About - Whan</title>
            <meta name="description" content="Abouut from Whan" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Navbar/>
          <main className={styles.main}>
            {children}
          </main>
        </>
)
}
