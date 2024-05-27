import { useSelector, useDispatch } from "react-redux";
import { changeTermSearch } from "../store";

function CarSearch() {
  const dispatch = useDispatch();
  const searchTerm = useSelector(state => {
    return state.cars.searchTerm;
  })

  const handleSearchTermCh = (event) => {
    dispatch(changeTermSearch(event.target.value));
  }

  return (
    <div className="list-header">
      <h3 className="title is-3">My Cars</h3>
      <div className="search field is-horizontal">
        <label className="label">Search</label>
        <input
          className="input"
          value={searchTerm}
          onChange={handleSearchTermCh}
        />
      </div>
    </div>
  )
}

export default CarSearch;