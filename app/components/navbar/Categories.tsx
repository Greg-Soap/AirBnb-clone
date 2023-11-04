"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import { GiCastle, GiForestCamp } from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";

import CategoryBox from "../CategoryBox";
import Container from "../Container";

export const categories = [
  {
    label: "Canada",
    country: "CA",
    icon: GiForestCamp,
    description: "This property is within Canada!",
  },
  {
    label: "United Kingdom",
    country: "GB",
    icon: GiCastle,
    description: "This property is within United Kingdom!",
  },
  {
    label: "United States",
    country: "US",
    icon: MdOutlineVilla,
    description: "This property is within United States!",
  },
  {
    label: "Australia",
    country: "AU",
    icon: TbMountain,
    description: "This property is within Australia!",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("locationValue");
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-center
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            country={item.country}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
