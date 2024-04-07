import { Link }  from "react-router-dom";
import { Navbar } from "flowbite-react";
import { getImageURL } from "../utils/image-util";

export default function Header() {
  return (
    <Navbar 
      fluid className="border p-6 justify-around shadow-md"
      theme={{
        "root": {
          "inner": {
            "base": "mx-auto flex flex-wrap items-center justify-around",
          }
        },
      }}
    >
      <Navbar.Brand as={Link} to={"/"}>
        <img src={getImageURL("logo.jfif")} className="mr-3 h-6 sm:h-9" alt="MyRentalStore" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">MyRentalStore</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link as={Link} to={"/"} className="text-xl">
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} to={"/games"} className="text-xl">
          Games
        </Navbar.Link>
        <Navbar.Link as={Link} to={"/admin"} className="text-xl">
          Admin Area
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}