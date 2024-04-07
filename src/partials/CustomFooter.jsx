import { Footer } from "flowbite-react";
import { getImageURL } from "../utils/image-util";

export default function CustomFooter() {
  return (
    <Footer container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href="/"
            src={getImageURL("logo.jfif")}
            alt="MyRentalStore"
            name="MyRentalStore"
          />
          <Footer.LinkGroup>
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by="Mateus Kürten Rodrigues" year={new Date().getFullYear()} />
      </div>
    </Footer>
  );
}