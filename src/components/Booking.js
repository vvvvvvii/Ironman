import { useState } from 'react';

const Booking = () => {
  const [num, setNum] = useState(0)
  const handleNum = (type) =>{
    if(type=== 'minus'){
      setNum(num-1)
    }else{
      setNum(num+1)
    }
  }
  return (
    <div>
      <p>創始店訂位人數</p>
      <button onClick={()=>handleNum('minus')}>-</button>
        {num}
      <button onClick={()=>handleNum('plus')}>+</button>
    </div>
  );
};
export default Booking;