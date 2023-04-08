import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import FundraiseService from "../services/FundraiseService";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import swal from "sweetalert2";
import print from "print-js";
import Box from "@mui/material/Box";

export default function BasicTable() {
  const [fundraise, setFundraise] = useState([]);
  const [search, setSearch] = React.useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getFundraise = () => {
      FundraiseService.getAllItem().then((res) => {
        setFundraise(res.data);
        console.log(res.data);
      });
    };

    getFundraise();
  }, []);

  const deleteFundraise = async (id) => {
    await FundraiseService.deleteItem(id)
      .then((res) => {
        console.log(`product ${id} deleted`);
        swal.fire(` succesfully deleted`);
      })
      .then((res) => {
        setFundraise(fundraise.filter((list) => list._id !== id));
      });
  };

  const edituser = async (_id) => {
    navigate(`/UpdateFundraise/${_id}`);
  };

  return (
    <div>
      <Box sx={{ p: 2 }}>
        <input
          type="search"
          placeholder="Enter name or service id for search payments"
          className="form-control"
          style={{
            width: "40%",
          }}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                style={{
                  color: "#fff",
                  backgroundColor: "#1e88e5",
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                First Name
              </TableCell>
              <TableCell
                align="center"
                style={{
                  color: "#fff",
                  backgroundColor: "#1e88e5",
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                Last Name
              </TableCell>
              <TableCell
                align="center"
                style={{
                  color: "#fff",
                  backgroundColor: "#1e88e5",
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                Address
              </TableCell>
              <TableCell
                align="center"
                style={{
                  color: "#fff",
                  backgroundColor: "#1e88e5",
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                Email
              </TableCell>
              <TableCell
                align="center"
                style={{
                  color: "#fff",
                  backgroundColor: "#1e88e5",
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                Amount
              </TableCell>
              <TableCell
                align="center"
                style={{
                  color: "#fff",
                  backgroundColor: "#1e88e5",
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                Method
              </TableCell>
              <TableCell
                align="center"
                style={{
                  color: "#fff",
                  backgroundColor: "#1e88e5",
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                Expiry
              </TableCell>
              <TableCell
                align="right"
                style={{
                  color: "#fff",
                  backgroundColor: "#1e88e5",
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                CVV
              </TableCell>
              <TableCell
                align="right"
                style={{
                  color: "#fff",
                  backgroundColor: "#1e88e5",
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                Type
              </TableCell>
              <TableCell
                align="right"
                style={{
                  color: "#fff",
                  backgroundColor: "#1e88e5",
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >

              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fundraise.length > 0 ? (
              fundraise
                .filter((row) => {
                  if (search == "") {
                    return row;
                  } else if (
                    row.ffname
                      .toString()
                      .toLowerCase()
                      .includes(search.toString().toLowerCase()) ||
                    row.flname
                      .toString()
                      .toLowerCase()
                      .includes(search.toString().toLowerCase())
                  ) {
                    return row;
                  }
                  return 0;
                })
                .map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">{row.ffname}</TableCell>
                    <TableCell align="center">{row.flname}</TableCell>
                    <TableCell align="center">{row.faddress}</TableCell>
                    <TableCell align="center">{row.femail}</TableCell>
                    <TableCell align="center">{row.famount}</TableCell>
                    <TableCell align="center">{row.fmethod}</TableCell>
                    <TableCell align="center">{row.fexpiry}</TableCell>
                    <TableCell align="center">{row.fcvv}</TableCell>
                    <TableCell align="center">{row.ftype}</TableCell>
                    <TableCell align="center" size="small">
                      <ButtonGroup>
                        <Button
                          size="small"
                          onClick={(e) => edituser(row._id, e)}
                        >
                          Edit
                        </Button>
                        <Button
                          color="error"
                          onClick={() => deleteFundraise(row._id)}
                          size="small"
                        >
                          Delete
                        </Button>
                      </ButtonGroup>
                    </TableCell>
                  </TableRow>
                ))
            ) : (
              <div className="p-2">No Data avaliable</div>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ p: 3 }}>
        <Button
          type="button"
          className="btn btn-info btn-sm"
          onClick={() =>
            print({
              printable: fundraise,
              properties: [
                { field: "ffname", displayName: "First Name" },
                { field: "flname", displayName: "Last Name" },
                { field: "faddress", displayName: "Address" },
                { field: "femail", displayName: "E-mail" },
                { field: "famount", displayName: "Amount" },
                { field: "fmethod", displayName: "Method" },
                { field: "fexpiry", displayName: "Expiry" },
                { field: "fcvv", displayName: "CVV" },
                { field: "ftype", displayName: "Type" },
              ],
              type: "json",
            })
          }
        >
          Get Report
        </Button>
      </Box>
    </div>
  );
}
