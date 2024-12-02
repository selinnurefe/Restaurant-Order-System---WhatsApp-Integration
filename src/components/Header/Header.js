import React from 'react'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.container}>
          <img id={styles.img} src="/images/logo.png" alt="yok" />
          <h1 className={styles.title}>Order Menu</h1>
        </div>
    </header>
  )
}

export default Header