import { useSelector } from "react-redux";

function CarValue() {
  const totalCost = useSelector(({ cars: { data, searchTerm } }) =>
    data
      .filter(car =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .reduce((a, b) => a + b.cost, 0)
  );

  return (
    <div className="car-value">
      Total Cost: ${totalCost}
    </div>
  )
}

export default CarValue;