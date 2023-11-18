"use client";

import dynamic from "next/dynamic";
import { IconType } from "react-icons";

import useCountries from "@/app/hooks/useCountries";
import { SafeReservation, SafeUser } from "@/app/types";

import Avatar from "../Avatar";
import ListingCategory from "./ListingCategory";
import { BiStar } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";

const Map = dynamic(() => import("../Map"), {
  ssr: false,
});

interface ListingInfoProps {
  user: SafeUser;
  description: string;
  guestCount: number;
  roomCount: number;
  bathroomCount: number;

  category:
    | {
        icon: IconType;
        label: string;
        description: string;
      }
    | undefined;
  locationValue: string;
  rating: number | null;
}

const ListingInfo: React.FC<ListingInfoProps> = ({
  user,
  description,
  guestCount,

  roomCount,
  bathroomCount,
  category,
  locationValue,
  rating,
}) => {
  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        {rating && (
          <div
            className="text-xl 
        font-semibold 
        flex 
        flex-row 
        items-center
        gap-2"
          >
            {rating} <AiFillStar />
          </div>
        )}
        <div
          className="
            flex 
            flex-row 
            items-center 
            gap-4 
            font-light
            text-neutral-500
          "
        >
          <div>{guestCount} guests</div>
          <div>{roomCount} rooms</div>
          <div>{bathroomCount} bathrooms</div>
        </div>
      </div>
      <hr />
      {category && (
        <ListingCategory
          icon={category.icon}
          label={category?.label}
          description={category?.description}
        />
      )}
      <hr />
      <div
        className="
      text-lg font-light text-neutral-500"
      >
        {description}
      </div>
      <hr />
    </div>
  );
};

export default ListingInfo;
