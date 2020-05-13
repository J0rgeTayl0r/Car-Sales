import React,{ useEffect, useState } from 'react';

const Total = props => {
  const [fullPrice, setFullPrice] = useState(props.car.price)
  useEffect(() => {
      setFullPrice(props.car.price + props.additionalPrice)
    },[props.car.price, props.additionalPrice])
  return (
    <div className="content">
      <h4>Total Amount: ${fullPrice}</h4>
    </div>
  );
};

export default Total;
