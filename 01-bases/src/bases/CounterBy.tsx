import { useState } from "react";

interface CounterProps {
    initialValue?: number;
}

interface CounterStateProps {
    counter: number;
    clicks: number;
}

export const CounterBy = ({initialValue = 5}: CounterProps) => {

    const [{ counter, clicks } , setCounterState] = useState<CounterStateProps>({
        counter: initialValue,
        clicks: 0 
    })

    const handleClick = (value: number) => {
        setCounterState( ({clicks, counter}) => ({
            counter: counter + value,
            clicks: clicks + 1
        }));
    }

  return (
    <>
        <h1>CounterBy: {counter}</h1>
        <h1>Clicks: {clicks}</h1>

        <button onClick={() => handleClick(1)}>+1</button>
        <button onClick={() => handleClick(5)}>+5</button>
    </>
  )
}
