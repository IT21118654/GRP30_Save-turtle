import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import user1 from "../../assets/images/users/user1.jpg";
import user2 from "../../assets/images/users/user2.jpg";
import user3 from "../../assets/images/users/user3.jpg";
import user4 from "../../assets/images/bg/sonal.jpg";
import user5 from "../../assets/images/users/user5.jpg";


const tableData = [
  {
    avatar: user3,
    name: " R.A.K.K. Kailash Waran",
    email: " it21118654@my.sliit.lk ",
    function: "Fundraise",
    status: "done",
    weeks: "it21118654",
  },
  {
    avatar: user4,
    name: "S.D.K. Liyanage",
    email: " it21006548@my.sliit.lk ",
    function: "Education & Research",
    status: "done",
    weeks: "it21006548",
  },
  {
    avatar: user3,
    name: "L.J. Samarahewa",
    email: "it21114380@my.sliit.lk ",
    function: "Awareness",
    status: "done",
    weeks: "it21114380",
  },
  {
    avatar: user3,
    name: "M. Ridhushan",
    email: " it21070280@my.sliit.lk",
    function: "Advocacy",
    status: "done",
    weeks: " it21070280",
  },
];

const ProjectTables = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Project Listing</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of the projects
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Team Lead</th>
                <th>Function</th>

                <th>Status</th>
                <th>Student Number</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <img
                        src={tdata.avatar}
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      />
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.name}</h6>
                        <span className="text-muted">{tdata.email}</span>
                      </div>
                    </div>
                  </td>
                  <td>{tdata.function}</td>
                  <td>
                    {tdata.status === "pending" ? (
                      <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                    ) : tdata.status === "holt" ? (
                      <span className="p-2 bg-warning rounded-circle d-inline-block ms-3"></span>
                    ) : (
                      <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                    )}
                  </td>
                  <td>{tdata.weeks}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectTables;
