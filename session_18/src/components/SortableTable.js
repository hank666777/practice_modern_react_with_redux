import Table from './Table'
import {RiExpandUpDownFill, RiArrowDropUpFill, RiArrowDropDownFill} from "react-icons/ri";
import useSort from "../hooks/use-sort"


function SortableTable(props) {
  const { config, data } = props;
  const { sortOrder, sortBy, sortedData, setSortColumn } = useSort(data, config);

  const updatedConfig = config.map(column => {
    // 無值=不可排序，直接返回
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th className="cursor-pointer hover:bg-gray-200" onClick={() => setSortColumn(column.label)}>
          <div className="flex items-center" >
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    }
  })

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