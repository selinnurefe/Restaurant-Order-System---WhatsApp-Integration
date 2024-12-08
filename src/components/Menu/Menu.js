import React from 'react';
import styles from './Menu.module.css';
import menuData from '../../data/menu.json';



function Menu({handleAddToOrder, handleRemoveFromOrder}) {

  return (
    <div className={styles.container}>
        <h1 className={styles.mainTitle}>Restaurant Delivery - Menu</h1>
        <div className={styles.menuCards}>

            {menuData.map(item =>(
                <div key={item.id} className={styles.menuCard}>
                        <div>
                            <img className={styles.image} src={item.image} alt={item.name} />                       
                        </div>
                        <div className={styles.content}>
                            <h2 className={styles.name}>{item.name}</h2>
                            <p className={styles.description}>{item.description}</p>
                        </div>
                        <p className={styles.price}>${item.price.toFixed(2)}</p>
                        <div className={styles.buttons}>
                            <button className={styles.button} onClick={() => handleAddToOrder(item)}> + </button>                       
                            <button className={styles.button} onClick={() => handleRemoveFromOrder(item)}> - </button>                        
                        </div>
                </div>
            ))}

        </div>
    </div>
  )
}

export default Menu;