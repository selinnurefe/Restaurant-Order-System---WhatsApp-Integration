import React from 'react';
import styles from '../OrderCard/OrderCard.module.css';

function OrderCard({orders,totalprice}) {
  return (
    <div className={styles.mainContainer}>
        <h2 className={styles.mainTitle}>Sipariş Detay</h2>
        <div className={styles.container}>
            {orders.map((order,index) => (
            <div key={index} className={styles.detailContainer}>
                <p>{order.name}...</p>
                <p><i>${order.price.toFixed(2)}</i></p>
            </div>
            ))} 
            <p> <strong>Toplam: </strong>${totalprice.toFixed(2)}</p>
        </div>
        <div className={styles.buttonContainer}>
            <button className={styles.button}>Siparişi Onayla</button>
        </div>
    </div>
  )
}

export default OrderCard;