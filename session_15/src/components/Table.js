function Table({ data, config, keyFn }) {
  const renderedHeaders = config.map(item => {
    return (
      <th key={item.label}>{item.label}</th>
    )
  })

  const renderedRows = data.map((rowData, index) => {
    const renderedCells = config.map((column, i) => {
      return <td className="p-2" key={column.label}>{column.render(rowData)}</td>
    })
    return (
      <tr className="border-b" key={keyFn(rowData)}>
        {renderedCells}
      </tr>
    )
  })

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">
          {renderedHeaders}
        </tr>
      </thead>
      <tbody>
        {renderedRows}
      </tbody>
    </table>
  )
}

export default Table;