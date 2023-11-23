import Link from "next/link";
import Container from "../Container";

const Footer: React.FC = () => {
  return (
    <footer className="text-black bg-white p-4 fixed bottom-0 w-full z-30 shadow-sm border-t">
      <Container>
        <div className="flex justify-between items-center max-md:flex-col max-md:gap-2">
          <div className="text-sm font-light">
            &copy; 2023 HomeStay Haven, All rights reserved.
          </div>
          <div className="text-sm font-light">
            Contact us at : <Link href={"#"}>support@homestayhaven</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
