import {useState} from "react";

function useSort(data, config) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  // sorted function
  const setSortColumn = (label) => {
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

  return {
    sortOrder,
    sortBy,
    sortedData,
    setSortColumn
  }
}

export default useSort;