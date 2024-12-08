import { useState } from "react";
import Header from "@/components/Header/Header";
import Menu from "@/components/Menu/Menu";
import OrderCard from "@/components/OrderCard/OrderCard";


export default function Home() {
  const[orders, setOrders] = useState([]);
  const[totalprice, setTotalprice] = useState(0); 
  const [count, setCount] = useState(0);


  const handleAddToOrder = (item) => {
    setOrders((prevOrders) =>{
      const currentOrder = prevOrders.find(order => order.id === item.id);
      if(currentOrder){
        return prevOrders.map(order => 
          order.id === item.id ? {...order, quantity: order.quantity + 1} : order
        );
      }else{
        return [...prevOrders, {...item, quantity:1}];
      }
    });
    setTotalprice((prevPrice)=> prevPrice + item.price );
  };

  
  const handleRemoveFromOrder = (item) => {
    setOrders((prevOrders) => {
      const currentOrder = prevOrders.find(order => order.id === item.id);

      if(currentOrder){
        if(currentOrder.quantity > 1){
          return prevOrders.map(order => 
            order.id === item.id ? {...order,quantity: order.quantity -1} : order);
        }else{
          return prevOrders.filter(order => order.id !== item.id);
        }
      }
      return prevOrders;
    });

    setTotalprice((prevPrice) => {
      const currentOrder = orders.find(order => order.id === item.id);
      return currentOrder ? prevPrice - item.price : prevPrice;
    })
  }
  
  const handleRemoveBasket = () => {
    setOrders([]);
    setTotalprice(0.00);
    setCount(0);
  }

  const handleSendInfoMessage = () => {
    const phoneNumber = "905555555555";
    const message =   `I want to 
    ${orders.map(order => `-${order.quantity} x ${order.name}($${order.price})`).join("\n")}
    
    Total Price: $${totalprice.toFixed(2)} 
    `;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  }
 
  return (
   <>
    <Header/>
    <Menu handleAddToOrder={handleAddToOrder} handleRemoveFromOrder={handleRemoveFromOrder}/>
    <OrderCard orders={orders} totalprice={totalprice} handleRemoveBasket={handleRemoveBasket}  quantity={count} handleSendInfoMessage={handleSendInfoMessage}/>
   </>
  );
}


