import "./styles.css";
import { createStore } from "redux";
import { Provider, connect, useSelector, useDispatch } from "react-redux";

const countReducer = function (state = 0, action) {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "SUBTRACT":
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(countReducer);

const mapStateToProps = (state) => {
  return {
    count: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: () => dispatch({ type: "ADD" }),
    subtract: () => dispatch({ type: "SUBTRACT" })
  };
};

const Component = ({ count, add, subtract }) => {
  return (
    <>
      <h2>Count = {count} </h2>
      <button onClick={add}>ADD </button>
      <button onClick={subtract}>SUBTRACT </button>
    </>
  );
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <h1>Redux store example</h1>
        <Container />
      </Provider>
    </div>
  );
}
