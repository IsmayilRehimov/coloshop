import React from 'react'
import styles from './Card.module.css'

const Card = ({item}) => {
  return (
    <div className={styles.card}>
        <div className={styles.cardImg}>
            <img src={item.image} alt="" />
        </div>
        <div className={styles.cardText}>
            <span>{item.title}</span>
            <p>{item.price}</p>
        </div>
        <div className={styles.cardBtn}>
            <button>ADD TO CART</button>
        </div>
    </div>
  )
}

export default Card