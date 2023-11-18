"use client";
import React from "react";
import useEditRentModal from "../hooks/useEditRentModal";
import EditRentModal from "./modals/EditRentModal";

export default function EditModalRender() {
  const editRentModal = useEditRentModal();
  return <>{editRentModal.isOpen && <EditRentModal />}</>;
}
