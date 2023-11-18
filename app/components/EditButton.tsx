"use client";

import { AiFillEdit, AiOutlineEdit } from "react-icons/ai";
import useEditRentModal from "../hooks/useEditRentModal";
import { useCallback } from "react";

interface EditButtonProps {
  listing: any;
}

const EditButton: React.FC<EditButtonProps> = ({ listing }) => {
  const editRentModal = useEditRentModal();
  const onEdit = useCallback(() => {
    editRentModal.onOpen(listing);
  }, [editRentModal, listing]);

  return (
    <div
      onClick={onEdit}
      className="
        relative
        hover:opacity-80
        transition
        cursor-pointer
        
      "
    >
      <AiFillEdit
        size={28}
        className="
          fill-white
        
         
        "
      />
    </div>
  );
};

export default EditButton;
