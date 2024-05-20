import Button from "../components/Button";
import useCounter from "../hooks/use-counter";

function CounterPage() {
  const { count, increment } = useCounter(10);

  return (
    <div>
      <h1>Count is {count}</h1>
      <Button onClick={increment}>increment</Button>
    </div>
  )
}

export default CounterPage;