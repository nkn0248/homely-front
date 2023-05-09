import { useDispatch, useSelector } from "react-redux";

const UserDetail = (props) => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  return (
    <>
      <p>{`uid : ${selector.users.uid}`}</p>
      <p>{`age : ${selector.users.age}`}</p>
    </>
  );
};

export async function getServerSideProps(ctx) {
  console.log("### [userDetail] server side render ###");
  const res = await fetch(`http://localhost:3000/api/users/${ctx.query.userid}`);
  const users = await res.json();

  return {
    props: { users: users },
  };
}

export default UserDetail;
