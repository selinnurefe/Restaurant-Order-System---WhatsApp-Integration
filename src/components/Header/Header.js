import React from 'react'
import styles from './Header.module.css'


function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.container}>
          <img id={styles.img} src="/images/logo.png" alt="yok" />
          <div>
            <p className={styles.title}>Sepetim</p>
          </div>
        </div>
    </header>
  )
}

export default Header