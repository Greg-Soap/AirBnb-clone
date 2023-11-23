"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { format } from "date-fns";

import useCountries from "@/app/hooks/useCountries";
import { SafeListing, SafeReservation, SafeUser } from "@/app/types";

import HeartButton from "../HeartButton";
import Button from "../Button";
import ClientOnly from "../ClientOnly";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
interface ListingCardProps {
  data: SafeListing;
  reservation?: SafeReservation;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: SafeUser | null;
}

const ListingCard: React.FC<ListingCardProps> = ({
  data,
  reservation,
  onAction,
  disabled,
  actionLabel,
  actionId = "",
  currentUser,
}) => {
  const router = useRouter();
  const { getByValue } = useCountries();

  const location = getByValue(data.locationValue);

  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      if (disabled) {
        return;
      }

      onAction?.(actionId);
    },
    [disabled, onAction, actionId]
  );

  const price = useMemo(() => {
    if (reservation) {
      return reservation.totalPrice;
    }

    return data.price;
  }, [reservation, data.price]);

  const reservationDate = useMemo(() => {
    if (!reservation) {
      return null;
    }

    const start = new Date(reservation.startDate);
    const end = new Date(reservation.endDate);

    return `${format(start, "PP")} - ${format(end, "PP")}`;
  }, [reservation]);
  let monthlyPrice = 25 * price;
  const handleDiscountPrices = () => {
    if (monthlyPrice > 7000) {
      const discount = monthlyPrice * 0.8;
      return discount;
    }
    return;
  };

  return (
    <div className="col-span-1 group">
      <div className="flex flex-col gap-2 w-full">
        <div
          className="
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          "
        >
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            pagination={{ dynamicBullets: true, dynamicMainBullets: 3 }}
            navigation={true}
            loop={true}
            style={
              {
                height: "100%",
                "--swiper-theme-color": "fff",
                "--swiper-navigation-size": "15px",
              } as React.CSSProperties
            }
          >
            {data.imageSrc.map((image, idx) => (
              <SwiperSlide key={idx}>
                <Image
                  fill
                  className="
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            "
                  src={image}
                  alt="Listing"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            className="
            absolute
            top-3
            right-3
          "
          >
            <HeartButton listingId={data.id} currentUser={currentUser} />
          </div>
        </div>
        <div
          className="font-semibold text-lg truncate cursor-pointer"
          onClick={() => router.push(`/listings/${data.id}`)}
        >
          {data.title}
        </div>
        <div className="font-normal text-lg text-neutral-700">
          {location?.region}, {location?.label}
        </div>
        <div className="font-light text-neutral-500">
          {reservationDate || data.category}
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <div className="flex flex-row items-center gap-1">
            <div className="font-semibold">$ {price}</div>
            {!reservation && <div className="font-light">night</div>}
          </div>
          <div className="flex flex-row items-center gap-1">
            <div
              className={` ${
                monthlyPrice > 7000
                  ? "line-through font-light text-sm mr-3 text-gray-400"
                  : "font-semibold"
              }`}
            >
              $ {monthlyPrice}
            </div>
            {monthlyPrice > 7000 && (
              <div className="font-semibold">$ {handleDiscountPrices()}</div>
            )}
            {!reservation && <div className="font-light">month</div>}
          </div>
        </div>
        {onAction && actionLabel && (
          <Button
            disabled={disabled}
            small
            label={actionLabel}
            onClick={handleCancel}
          />
        )}
      </div>
    </div>
  );
};

export default ListingCard;
