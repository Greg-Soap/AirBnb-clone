import { NextResponse } from "next/server";

import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";

interface IParams {
  listingId?: string;
}

export async function DELETE(
  request: Request,
  { params }: { params: IParams }
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { listingId } = params;

  if (!listingId || typeof listingId !== "string") {
    throw new Error("Invalid ID");
  }

  const listing = await prisma.listing.deleteMany({
    where: {
      id: listingId,
      userId: currentUser.id,
    },
  });

  return NextResponse.json(listing);
}
export async function PATCH(request: Request, { params }: { params: IParams }) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { listingId } = params;

  if (!listingId || typeof listingId !== "string") {
    throw new Error("Invalid ID");
  }
  interface BodyProps {
    imageSrc: string[];
    category: string;
    price: number;
    starRating: number;
  }

  const body: BodyProps = await request.json();
  const { imageSrc, category, price, starRating } = body;

  // Object.keys(body).forEach((value: any) => {
  //   if (!body[value]) {
  //     NextResponse.error();
  //   }
  // });
  if ([imageSrc, category, price, starRating].some((value) => !value)) {
    NextResponse.error();
  }

  const listing = await prisma.listing.update({
    where: { id: listingId },
    data: {
      imageSrc,
      category,
      starRating,
      price,
      userId: currentUser.id,
    },
  });

  return NextResponse.json(listing);
}
