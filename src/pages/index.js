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
          order.id ===item.id ? {...order, quantity: order.quantity + 1} : order
        );
      }else{
        return [...prevOrders, {...item, quantity:1}];
      }
    });
    setTotalprice((prevPrice)=> prevPrice + item.price );
  };
  
  const handleRemoveFromOrder = (item) => {
    const updatedList = orders.filter((order) => order.id !== item.id);
    

    if (updatedList.length !== orders.length){
      setTotalprice((prevPrice) => prevPrice -item.price);
    }

    setOrders(updatedList);
  }
  
  const handleRemoveBasket = () => {
    setOrders([]);
    setTotalprice(0.00);
    setCount(0);
  }
 
  return (
   <>
    <Header/>
    <Menu handleAddToOrder={handleAddToOrder} handleRemoveFromOrder={handleRemoveFromOrder}/>
    <OrderCard orders={orders} totalprice={totalprice} handleRemoveBasket={handleRemoveBasket}  quantity={count}/>
   </>
  );
}
