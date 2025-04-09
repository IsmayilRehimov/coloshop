import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <p>free shipping on all u.s orders over $50</p>
            <div className={styles.topRight}>
                <p>USD</p>
                <p>English</p>
                <p>My Account</p>
            </div>
        </div>
        <div className={styles.navbar}>
        <h1>
            <span style={{ color: 'black' }}>COLO</span>
            <span style={{ color: '#ff4950' }}>SHOP</span>
    </h1>


        <div className={styles.nav}>
            <a href="">HOME</a>
            <a href="">SHOP</a>
            <a href="">PROMOTION</a>
            <a href="">PAGES</a>
            <a href="">BLOG</a>
            <a href="">CONTACT</a>
        </div>
        <div className={styles.icons}>
            <i class="bi bi-search"></i>
            <i class="bi bi-person-fill"></i>
            <i class="bi bi-cart3"></i>
        </div>


        </div>
    </div>
  )
}

export default Header