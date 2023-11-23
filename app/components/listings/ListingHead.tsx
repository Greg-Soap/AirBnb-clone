"use client";

import Image from "next/image";

import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";

import Heading from "../Heading";
import HeartButton from "../HeartButton";
import EditButton from "../EditButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

interface ListingHeadProps {
  title: string;
  locationValue: string;
  imageSrc: string[];
  id: string;
  currentUser?: SafeUser | null;
  listing: any;
}

const ListingHead: React.FC<ListingHeadProps> = ({
  title,
  locationValue,
  imageSrc,
  id,
  currentUser,
  listing,
}) => {
  const { getByValue } = useCountries();

  const location = getByValue(locationValue);

  return (
    <>
      <Heading
        title={title}
        subtitle={`${location?.region}, ${location?.label}`}
      />
      <div
        className="
          w-full
          h-[60vh]
          lg:h-[75vh]
          overflow-hidden 
          rounded-xl
          relative
          flex
        "
      >
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          pagination={{ dynamicBullets: true, dynamicMainBullets: 3 }}
          navigation={true}
          autoplay={{ delay: 3000 }}
          style={
            {
              "--swiper-navigation-size": "15px",
            } as React.CSSProperties
          }
          loop={true}
        >
          {imageSrc.map((image, idx) => (
            <SwiperSlide key={idx}>
              <Image
                src={image}
                fill
                className="object-cover w-full"
                alt="Image"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          className="
            absolute
            top-5
            flex
            gap-4
            items-center
            right-5
            z-[9999]
          "
        >
          {currentUser?.isAdmin === true && <EditButton listing={listing} />}
          <HeartButton listingId={id} currentUser={currentUser} />
        </div>
      </div>
    </>
  );
};

export default ListingHead;
