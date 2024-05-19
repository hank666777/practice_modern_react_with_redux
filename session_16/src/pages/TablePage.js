import SortableTable from "../components/SortableTable";

function TablePage() {
  const data = [
    {name: "Orange", color: "bg-orange-500", score: 5},
    {name: "Apple", color: "bg-red-500", score: 3},
    {name: "Banana", color: "bg-yellow-500", score: 1},
    {name: "Lime", color: "bg-gray-500", score: 4},
  ]
  const b = false;
  const config = [
    {
      label: "Fruits",
      render: fruit => fruit.name,
      sortValue: fruit => fruit.name,
      sort: (a, b) => b ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name),
    },
    {
      label: "Color",
      render: fruit => <div className={`p-3 m-2 ${fruit.color}`}></div>,
      sort: (a, b) =>  a.color - b.color,
    },
    {
      label: "Score",
      render: fruit => fruit.score,
      header: () => <th className="bg-red-500">Score</th>,
      sortValue: fruit => fruit.score,
      sort: (a, b) => {},
    },
  ]

  const keyFn = (fruit) => {
    return fruit.name;
  }

  return (
    <div>
      <SortableTable data={data} config={config} keyFn={keyFn}/>
    </div>
  )
}

export default TablePage;