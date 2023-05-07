// layout : https://mui.com/material-ui/react-table/#column-grouping
import {
  Button,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deatiluser
} from "../../redux/userslice";


const UserList = (props) => {
  console.log(props.users);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [users, setUsers] = useState(props.users);
  const [age, setAge] = useState("");
  const router=useRouter()
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  console.log(users);

  const columns = [
    { id: "uid", label: "UID", minWidth: 170 },
    { id: "username", label: "UserName", minWidth: 100 },
    {
      id: "email",
      label: "email",
      minWidth: 170,
      format: (value) => value.toLocaleString("en-US"),
    },
  ];
  const handleSearchListener = () => {
    console.log(age);
  };
  const onClickListener = () => {
    dispatch(deatiluser({uid: "01", username: "author" ,age: "10"}))
    router.push(`/users/${age}`)
  };

  return (
    <>
      <Select
        value={age}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem value="">
          {" "}
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
      <Button onClick={handleSearchListener.bind(this)} variant="contained">
        Search
      </Button>

      <p>This is userList </p>
      <Paper sx={{ width: "100%" }}>
        <TableContainer sx={{ maxHeight: 500 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ top: 57, minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {users
                ? users.users
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow
                          key={row.id}
                          onClick={onClickListener.bind(this)}
                        >
                          <TableCell>{row.id}</TableCell>
                          <TableCell>{row.username}</TableCell>
                          <TableCell>{row.email}</TableCell>
                        </TableRow>
                      );
                    })
                : ""}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export async function getServerSideProps() {
  console.log("### server side render ###");
  const res = await fetch("http://localhost:3000/api/users");
  const users = await res.json();

  return {
    props: { users: users },
  };
}

export default UserList;
