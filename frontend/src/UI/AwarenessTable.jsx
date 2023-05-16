import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import AwarenessService from "../services/AwarenessService";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import swal from "sweetalert2";
import print from "print-js";
import Box from "@mui/material/Box";

export default function BasicTable() {
  const [awareness, setAwareness] = useState([]);
  const [search, setSearch] = React.useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getAwareness = () => {
      AwarenessService.getAllItem().then((res) => {
        setAwareness(res.data);
        console.log(res.data);
      });
    };

    getAwareness();
  }, []);

  const deleteAwareness = async (id) => {
    await AwarenessService.deleteItem(id)
      .then((res) => {
        console.log(`product ${id} deleted`);
        swal.fire(` succesfully deleted`);
      })
      .then((res) => {
        setAwareness(awareness.filter((list) => list._id !== id));
      });
  };

  const edituser = async (_id) => {
    navigate(`/UpdateAwareness/${_id}`);
  };

  return (
    <div>
      <Box sx={{ p: 2 }}>
        <input
          type="search"
          placeholder="Enter Topic for search details"
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
                Topic
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
                Description
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
                Links
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
                Images
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
                Videos
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
                

              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {awareness.length > 0 ? (
              awareness
                .filter((row) => {
                  if (search == "") {
                    return row;
                  } else if (
                    row.ftopic
                      .toString()
                      .toLowerCase()
                      .includes(search.toString().toLowerCase()) ||
                      row.fdescription
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
                    <TableCell component="th" scope="row">{row.ftopic}</TableCell>
                    <TableCell align="center">{row.fdescription}</TableCell>
                    <TableCell align="center">{row.flinks}</TableCell>
                    <TableCell align="center">{row.fimage}</TableCell>
                    <TableCell align="center">{row.fvideo}</TableCell>
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
                          onClick={() => deleteAwareness(row._id)}
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
              printable: awareness,
              properties: [
                { field: "ftopic", displayName: "Topic" },
                { field: "fdescription", displayName: "Description" },
                { field: "flinks", displayName: "Links" },
                { field: "fimage", displayName: "Images" },
                { field: "fvideo", displayName: "Videos" },
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
