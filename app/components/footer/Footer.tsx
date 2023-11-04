import Link from "next/link";
import Container from "../Container";

const Footer: React.FC = () => {
  return (
    <footer className="text-black bg-white p-4 fixed bottom-0 w-full z-50 shadow-sm border-t">
      <Container>
        <div className="flex justify-between items-center">
          <div className="text-sm font-light">
            &copy; 2023 HomeStay Haven, All rights reserved.
          </div>
          <div className="text-sm font-light">
            Contact us at : <Link href={"#"}>7775544334</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
