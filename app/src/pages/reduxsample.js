import {
  signin,
  increment,
  selectUser,
  incrementAsync,
  decrementAsync,
} from "../redux/userslice";

const { useDispatch, useSelector } = require("react-redux");

function ReduxSample() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const users = selectUser(selector);
  console.log(users);
  return (
    <>
      <h1>counter page</h1>
      <button
        onClick={() =>
          // dispatch(increment())
          dispatch(signin({ uid: "0001", username: "testuser" }))
        }
      >
        dispatch button
      </button>
      <button
        onClick={() =>
          // dispatch(increment())
          dispatch(increment())
        }
      >
        dispatch button
      </button>

      <h2>counter : {users.number}</h2>
      <button onClick={() => dispatch(incrementAsync(2))}>
        Increment Async
      </button>
      <button onClick={() => dispatch(decrementAsync(2))}>
        Decrement Async
      </button>

      <form method="POST" action="/login" id="loginform">
        <input type="submit" style={{ visibility: "hidden" }} />
      </form>
      <button onClick={() => document.getElementById("loginform").submit()}>
        submit
      </button>
    </>
  );
}

export default ReduxSample;
