import { Listing } from "@prisma/client";
import { create } from "zustand";

interface RentModalStore {
  isOpen: boolean;
  onOpen: (initialListing: Listing) => void;
  onClose: () => void;
  listing: Listing;
  setListing: (listing: Listing) => void;
}

const useEditRentModal = create<RentModalStore>((set) => ({
  isOpen: false,
  onOpen: (initialListing) => {
    set({ isOpen: true });
    set({ listing: initialListing });
  },
  onClose: () => set({ isOpen: false }),
  listing: {
    id: "",
    category: "",
    locationValue: "",
    guestCount: 1,
    roomCount: 1,
    bathroomCount: 1,
    imageSrc: [],
    price: 234,
    title: "",
    description: "",
    paymentCode: "",
    createdAt: new Date(),
    userId: "",
    starRating: 4.0,
  },
  setListing: (newListing) =>
    set((state) => ({ listing: { ...state.listing, ...newListing } })),
}));

export default useEditRentModal;
