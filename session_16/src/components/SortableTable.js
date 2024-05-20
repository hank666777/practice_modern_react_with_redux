import {useState} from "react";
import Table from './Table'
import {RiExpandUpDownFill, RiArrowDropUpFill, RiArrowDropDownFill} from "react-icons/ri";

function SortableTable(props) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const {config, data} = props;

  // sorted function
  const handleClick = (label) => {
    // label is equal to the current sortBy piece of state
    if (sortBy && label !== sortBy) {
      setSortOrder('asc');
      setSortBy(label);
      return;
    }

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
    // console.log(label)
  }

  const updatedConfig = config.map(column => {
    // 無值=不可排序，直接返回
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th className="cursor-pointer hover:bg-gray-200" onClick={() => handleClick(column.label)}>
          <div className="flex items-center" >
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    }
  })


  let sortedData = data;
  // only sort data if sortOrder && sortBy are not null
  if (sortOrder && sortBy) {
    const {sortValue} = config.find(column => column.label === sortBy)
    // Make a copy of the 'data' prop
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a)
      const valueB = sortValue(b)
      // console.log('valueA: ', valueA, ' valueB: ', valueB)

      // find the correct sortValue function and use it for sorted
      const reverseOrder = sortOrder === 'asc' ? 1 : -1;
      if (typeof valueA === 'string') {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    })
  }

  // overriding the previous one(config)
  return <Table {...props} data={sortedData} config={updatedConfig}/>
}

function getIcons(label, sortBy, sortOrder) {
  // 當前沒有按此列排序 or null
  if (label !== sortBy || sortOrder === null) {
    return <RiExpandUpDownFill/>
  } else if (sortOrder === 'asc') {
    return <RiArrowDropUpFill/>
  } else if (sortOrder === 'desc') {
    return <RiArrowDropDownFill/>
  }
}

export default SortableTable;