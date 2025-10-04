import {  useState } from "react";

function Counter() {
    const [count, setCounter] = useState(0);

    return(
        <div className="container bg-green-600 rounded-3xl p-5 mt-10">
            <h1 
                className={`text-9xl font-bold mb-9 ${count < 0 ? 'text-red-600' : 'text-white'}`}
                >
                {count}
            </h1>
            <div className="flex gap-3 justify-center">
                <button 
                    className="border rounded-md p-4 hover:bg-white hover:text-green-600" 
                    onClick={() => setCounter(count + 1)}>
                    +
                </button>
                <button className="border rounded-md p-4 hover:bg-white hover:text-green-600" onClick={() => setCounter(count - 1)}>-</button>
                <button className="border rounded-md p-4 hover:bg-white hover:text-green-600" onClick={() => setCounter(0)}>Reset</button>
            </div>

        </div>
    )

    function min() {
        if (count < 0){
            count.style.color = "red";
        }
    }
}



export default Counter