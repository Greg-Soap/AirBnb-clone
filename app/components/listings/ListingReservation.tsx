"use client";

import { Range } from "react-date-range";

import Button from "../Button";
import Calendar from "../inputs/Calendar";
import { SafeReservation } from "@/app/types";
import Link from "next/link";

interface ListingReservationProps {
  price: number;
  dateRange: Range;
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  reservation?: SafeReservation;
  disabled?: boolean;
  disabledDates: Date[];
  paymentUrl: string;
}

const ListingReservation: React.FC<ListingReservationProps> = ({
  price,
  dateRange,
  totalPrice,
  reservation,
  onChangeDate,
  onSubmit,
  disabled,
  disabledDates,
  paymentUrl,
}) => {
  let monthlyPrice = 25 * price;
  const handleDiscountPrices = () => {
    if (monthlyPrice > 7000) {
      const discount = monthlyPrice * 0.8;
      return discount;
    }
    return;
  };
  return (
    <div
      className="
      bg-white 
        rounded-xl 
        border-[1px]
      border-neutral-200 
        overflow-hidden
      "
    >
      <div
        className="
      flex flex-col gap-3 p-4"
      >
        <div className="flex gap-1 items-center">
          <div className="text-xl font-semibold">$ {price}</div>
          <div className="font-light text-neutral-600">night</div>
        </div>
        <div className="flex gap-1 items-center">
          <div
            className={`text-xl ${
              monthlyPrice > 7000
                ? "line-through font-light mr-3 text-gray-400"
                : "font-semibold"
            }`}
          >
            $ {monthlyPrice}
          </div>
          {monthlyPrice > 7000 && (
            <div className="text-xl font-semibold">
              $ {handleDiscountPrices()}
            </div>
          )}
          <div className="font-light text-neutral-600">month</div>
        </div>
      </div>
      <hr />
      <Calendar
        value={dateRange}
        disabledDates={disabledDates}
        onChange={(value) => onChangeDate(value.selection)}
      />
      <hr />
      <div className="p-4">
        <a
          href={paymentUrl ? paymentUrl : ""}
          target={paymentUrl ? "_blank" : "_self"}
          rel="noopener noreferrer"
        >
          <Button
            disabled={disabled}
            label={reservation ? "Reserved" : "Reserve"}
            onClick={onSubmit}
          />
        </a>
      </div>
      <hr />
      <div
        className="
          p-4 
          flex 
          flex-row 
          items-center 
          justify-between
          font-semibold
          text-lg
        "
      >
        <div>Total</div>
        <div>$ {totalPrice}</div>
      </div>
    </div>
  );
};

export default ListingReservation;
