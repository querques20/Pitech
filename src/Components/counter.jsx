import { useState } from "react"; 

export default function Counter() {

const [count , setCount] = useState(0);

const handleIncrement = () => {
    setCount(count + 10);
};
const handleDecrement = () => {
    setCount(count - 10);
};
return (
    <div>
        <p>contador con use state: {count}</p>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
    </div>
);
}