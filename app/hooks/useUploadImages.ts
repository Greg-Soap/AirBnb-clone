import { create } from "zustand";

interface UploadImagesStore {
  imageUrls: string[];
  addImage: (imageUrl: string) => void;
  clearImages: () => void;
}

const useUploadImages = create<UploadImagesStore>((set) => ({
  imageUrls: [],
  addImage: (imageUrl) =>
    set((state) => ({ imageUrls: [...state.imageUrls, imageUrl] })),
  clearImages: () => set({ imageUrls: [] }),
}));

export default useUploadImages;
