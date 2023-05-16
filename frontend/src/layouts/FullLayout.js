import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Container } from "reactstrap";
import Footer from "./Footer";
import About from "../views/About";

const FullLayout = () => {
  return (
    <main>
      {/********header**********/}
      <Header />
      <div className="pageWrapper d-lg-flex">
        {/********Content Area**********/}
        <div className=" contentArea">
          {/********Middle Content**********/}
          <Container  fluid>
            <Outlet />
          </Container>
        </div>
      </div>
      <Footer/>
    </main>
  );
};

export default FullLayout;
