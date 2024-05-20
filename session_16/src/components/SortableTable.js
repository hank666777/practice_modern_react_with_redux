import {useState} from "react";
import Table from './Table'

function SortableTable(props) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const {config, data} = props;

  const handleClick = (label) => {
    if (sortOrder === null) {
      setSortOrder('asc')
      setSortBy(label)
    } else if (sortOrder === 'asc') {
      setSortOrder('desc')
      setSortBy(label)
    } else if (sortOrder === 'desc') {
      setSortOrder(null)
      setSortBy(null)
    }
    console.log(label)
  }

  const updatedConfig = config.map(column => {
    // 無值=不可排序，直接返回
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th onClick={() => handleClick(column.label)}>
          {column.label} Is sortable
        </th>
      ),
    }
  })

  // only sort data if sortOrder && sortBy are not null

  return (
    <div>
      {sortOrder} - {sortBy}
      {/*overriding the previous one(config)*/}
      <Table {...props} config={updatedConfig}/>
    </div>
  )
}

export default SortableTable;