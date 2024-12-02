import React from 'react';
import styles from './Menu.module.css';
import menuData from '../../data/Menu';

function Menu() {
  return (
    <div className={styles.container}>
        <h1>Menu</h1>
        <div className={styles.menuCards}>
            <div>
                <img className={styles.image}  src="https://i.pinimg.com/1200x/32/27/24/3227246777ae976a884047b02a1e8a75.jpg" alt="Edamame" />
            </div>
            <div>
                <h1>Spicy Japanese Edamame</h1>
                <p>250g extra spicy</p>
            </div>
            <div>
                <p>175 TL</p>
            </div>
        </div>
    </div>
  )
}

export default Menu