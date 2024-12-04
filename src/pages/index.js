import { useState } from "react";
import Header from "@/components/Header/Header";
import Menu from "@/components/Menu/Menu";
import OrderCard from "@/components/OrderCard/OrderCard";


export default function Home() {
  const[orders,setOrders] = useState([]);
  const[totalprice,setTotalprice] = useState(0); 

  const handleAddToOrder = (item) => {
    setOrders((prevOrders) => [...prevOrders, item]);
    setTotalprice((prevPrice)=> prevPrice + item.price );
  };
  
  const handleRemoveFromOrder = (item) => {
    const updatedList = orders.filter((order) => order.id !== item.id);
    

    if (updatedList.length !== orders.length){
      setTotalprice((prevPrice) => prevPrice -item.price);
    }

    setOrders(updatedList);
  }
  

  return (
   <>
    <Header/>
    <Menu handleAddToOrder={handleAddToOrder} handleRemoveFromOrder={handleRemoveFromOrder}/>
    <OrderCard orders={orders} totalprice={totalprice}/>
   </>
  );
}
