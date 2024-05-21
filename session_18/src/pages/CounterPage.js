import { useReducer } from 'react'
import Button from "../components/Button";
import Panel from "../components/Panel";

const INCREMENT = "increment";
const DECREMENT = "decrement";
const SET_VALUE_TO_ADD = "set_value_to_add";
const ADD_VALUE_TO_COUNT = "add_value_to_count";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      }
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      }
    case SET_VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload,
      }
    case ADD_VALUE_TO_COUNT:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0,
      }
    default:
      console.error("Unknown action type " + action.type);
      throw new Error("Unknown action type " + action.type);
  }

}

function CounterPage({ initialCount }) {
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    dispatch({
      type: INCREMENT,
    })
  }

  const decrement = () => {
    dispatch({
      type: DECREMENT,
    })
  }

  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: ADD_VALUE_TO_COUNT,
    })
  }
  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>increment</Button>
        <Button onClick={decrement}>decrement</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={state.valueToAdd || ""}
          onChange={handleChange}
          type="namber"
          className="p-1 m-3 bg-gray-50 border border-grey-300"
        />
        <Button  value={state.valueToAdd}>Add it!</Button>
      </form>
    </Panel>
  )
}

export default CounterPage;