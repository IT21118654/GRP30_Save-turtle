import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import AdvocacyService from "../services/AdvocacyService";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import swal from "sweetalert2";
import print from "print-js";
import Box from "@mui/material/Box";

export default function BasicTable() {
  const [advocacy, setAdvocacy] = useState([]);
  const [search, setSearch] = React.useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getAdvocacy = () => {
      AdvocacyService.getAllItem().then((res) => {
        setAdvocacy(res.data);
        console.log(res.data);
      });
    };

    getAdvocacy();
  }, []);

  const deleteAdvocacy = async (id) => {
    await AdvocacyService.deleteItem(id)
      .then((res) => {
        console.log(`product ${id} deleted`);
        swal.fire(` succesfully deleted`);
      })
      .then((res) => {
        setAdvocacy(advocacy.filter((list) => list._id !== id));
      });
  };

  const edituser = async (_id) => {
    navigate(`/UpdateAdvocacy/${_id}`);
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
                Event Name
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
                Place
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
                contact
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
                Image 
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
            {advocacy.length > 0 ? (
              advocacy
                .filter((row) => {
                  if (search == "") {
                    return row;
                  } else if (
                    row.eventname
                      .toString()
                      .toLowerCase()
                      .includes(search.toString().toLowerCase()) ||
                    row.description
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
                    <TableCell component="th" scope="row">{row.eventname}</TableCell>
                    <TableCell align="center">{row.description}</TableCell>
                    <TableCell align="center">{row.place}</TableCell>
                    <TableCell align="center">{row.contact}</TableCell>
                    <TableCell align="center">{row.image}</TableCell>
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
                          onClick={() => deleteAdvocacy(row._id)}
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
              printable: advocacy,
              properties: [
                { field: "eventname", displayName: "Event Name" },
                { field: "description", displayName: "Description" },
                { field: "place", displayName: "Place" },
                { field: "contact", displayName: "contact" },
                { field: "image", displayName: "Image" },
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
