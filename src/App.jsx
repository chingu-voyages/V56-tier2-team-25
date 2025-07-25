import Header from "./components/Header";
import LandingPageAdmin from "./components/Landingpages/LandingPageAdmin";
import LandingPageGuest from "./components/Landingpages/LandingPageGuest";
import LandingPageStaff from "./components/Landingpages/LandingPageStaff";
import { useState } from "react";

const App = () => {
  const [page, setPage] = useState("admin");

  return (
    <>
      <Header />
      <div className="h-16 flex text-center items-center justify-center">
        <div
          className="w-20 mr-2 border-1 p-1 hover:cursor-pointer"
          onClick={() => {
            setPage("admin");
          }}
        >
          Admin
        </div>
        <div
          className="w-20 ml-2 border-1 p-1 hover:cursor-pointer"
          onClick={() => {
            setPage("staff");
          }}
        >
          Staff
        </div>
        <div
          className="w-20 ml-2 border-1 p-1 hover:cursor-pointer"
          onClick={() => {
            setPage("guest");
          }}
        >
          Guest
        </div>
      </div>
      {page === "admin" ? <LandingPageAdmin /> : null}
      {page === "staff" ? <LandingPageStaff /> : null}
      {page === "guest" ? <LandingPageGuest /> : null}
    </>
  );
};

export default App;
