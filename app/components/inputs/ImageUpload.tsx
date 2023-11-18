"use client";

import useUploadImages from "@/app/hooks/useUploadImages";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { TbPhotoPlus } from "react-icons/tb";

declare global {
  var cloudinary: any;
}

const uploadPreset = "mikaygfc";

interface ImageUploadProps {
  onChange: (value: string[]) => void;
  value: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, value }) => {
  const [uploadsComplete, setUploadsComplete] = useState(false);
  const { imageUrls, addImage, clearImages } = useUploadImages();
  const handleUpload = (result: any) => {
    addImage(result?.info?.secure_url);
  };
  useEffect(() => {
    if (uploadsComplete) {
      onChange(imageUrls);
      clearImages();
      setUploadsComplete(false);
    }
  }, [uploadsComplete]);

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset={uploadPreset}
      options={{ multiple: true }}
      onClose={() => setUploadsComplete(true)}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open?.()}
            className="
              relative
              cursor-pointer
              hover:opacity-70
              transition
              border-dashed 
              border-2 
              p-20 
              border-neutral-300
              flex
              flex-col
              justify-center
              items-center
              gap-4
              text-neutral-600
            "
          >
            <TbPhotoPlus size={50} />
            <div className="font-semibold text-lg">Click to upload</div>
            {value && (
              <div
                className="
              absolute inset-0 w-full h-full"
              >
                <Image
                  fill
                  style={{ objectFit: "cover" }}
                  src={value}
                  alt="House"
                />
              </div>
            )}
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUpload;
