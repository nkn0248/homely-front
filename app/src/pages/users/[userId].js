import { useDispatch, useSelector } from "react-redux";

const UserDetail = (props) => {
    const dispatch = useDispatch() 
    const selector = useSelector(state => state)
  return (<>
  <p>{`uid : ${selector.users.uid}`}</p>
  <p>{`age : ${selector.users.age}`}</p>
  </>);
};

export default UserDetail;
