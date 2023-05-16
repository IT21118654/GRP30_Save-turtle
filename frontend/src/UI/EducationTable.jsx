import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import EducationService from "../services/EducationService";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import swal from "sweetalert2";
import print from "print-js";
import Box from "@mui/material/Box";

export default function EducationTable() {
  const [education, setEducation] = useState([]);
  const [search, setSearch] = React.useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getEducation = () => {
      EducationService.getAllItem().then((res) => {
        setEducation(res.data);
        console.log(res.data);
      });
    };

    getEducation();
  }, []);

  const deleteEducation = async (id) => {
    await EducationService.deleteItem(id)
      .then((res) => {
        console.log(`product ${id} deleted`);
        swal.fire(` succesfully deleted`);
      })
      .then((res) => {
        setEducation(education.filter((list) => list._id !== id));
      });
  };

  const editdata = async (_id) => {
    navigate(`/UpdateEducation/${_id}`);
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
                Type
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
                Nesting Density
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
               Egg Laying Density
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
                Status
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
                Specialists
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
                Reports
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
            {education.length > 0 ? (
              education
                .filter((row) => {
                  if (search == "") {
                    return row;
                  } else if (
                    row.type
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
                    <TableCell align="center">{row.type}</TableCell>
                    <TableCell align="center">{row.Altitude}</TableCell>
                    <TableCell align="center">{row.Longitude}</TableCell>
                    <TableCell align="center">{row.Status}</TableCell>
                    <TableCell align="center">{row.Specialists}</TableCell>
                    <TableCell align="center">{row.Reports}</TableCell>
                    <TableCell align="center" size="small">
                      <ButtonGroup>
                        <Button
                          size="small"
                          onClick={(e) => editdata(row._id, e)}
                        >
                          Edit
                        </Button>
                        <Button
                          color="error"
                          onClick={() => deleteEducation(row._id)}
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
              printable: education,
              properties: [
                { field: "type", displayName: "Type" },
                { field: "Altitude", displayName: "Altitude" },
                { field: "Longitude", displayName: "Longitude" },
                { field: "Status", displayName: "Status" },
                { field: "Specialists", displayName: "Specialists" },
                { field: "Reports", displayName: "Reports" },
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