import React from 'react';
import styles from '../OrderCard/OrderCard.module.css';

function OrderCard({orders,totalprice, handleRemoveBasket, quantity, handleSendInfoMessage}) {
  return (
    <div className={styles.mainContainer}>
        <h2 className={styles.mainTitle}>Order Detail</h2>
        <div className={styles.container}>
            {orders.map((order,index) => (
            <div key={index} className={styles.detailContainer}>
                <p> {order.quantity} x {order.name}...</p>
                <p><i>${order.price.toFixed(2)}</i></p>
            </div>
            ))} 
            <p> <strong>Total: </strong>${totalprice.toFixed(2)}</p>
        </div>
        <div className={styles.buttonContainer}>
            <button className={styles.button} onClick={handleRemoveBasket}>Empty Basket</button>
            <button className={styles.button} onClick={handleSendInfoMessage}>Confirm Order</button>
        </div>
    </div>
  )
}

export default OrderCard;