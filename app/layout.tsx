import { Nunito } from "next/font/google";

import Navbar from "@/app/components/navbar/Navbar";
import LoginModal from "@/app/components/modals/LoginModal";
import RegisterModal from "@/app/components/modals/RegisterModal";
import SearchModal from "@/app/components/modals/SearchModal";
import RentModal from "@/app/components/modals/RentModal";

import ToasterProvider from "@/app/providers/ToasterProvider";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./globals.css";
import ClientOnly from "./components/ClientOnly";
import getCurrentUser from "./actions/getCurrentUser";
import Footer from "./components/footer/Footer";
import EditModalRender from "./components/EditModalRender";

export const metadata = {
  title: "HomeStay Haven - Your Gateway to Affordable Living",
  description:
    "Explore budget-friendly leases and experience comfort without compromise at HomeStay Haven. Discover the perfect blend of quality and affordability.",
  keywords:
    "HomeStay Haven, affordable living, cheap leases, budget-friendly housing, comfortable homes",
  ogTitle: "HomeStay Haven - Your Gateway to Affordable Living",
  ogDescription:
    "Explore budget-friendly leases and experience comfort without compromise at HomeStay Haven. Discover the perfect blend of quality and affordability.",
  ogType: "website",
  ogImage: "/images/favicon.ico", // Add the actual path to your website's image for better visual appeal
  ogUrl: "https://www.homestayhaven.vercel.app", // Replace with your website URL
};

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <SearchModal />
          <RentModal />
          <EditModalRender />
          <Navbar currentUser={currentUser} />
          <Footer />
        </ClientOnly>
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
