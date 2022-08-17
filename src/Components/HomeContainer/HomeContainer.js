import React, { useState } from "react";
import Product from "../AllProducts/Product";
import AddProductModal from "../Shared/Modal/AddProductModal";
import Modal from "../Shared/Modal/Modal";

const HomeContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModals = () => {
    setIsOpen(true);
  };
  return (
    <div>
      <div className="w-7/12 mx-auto my-4">
        <button
          className="w-full p-2 text-center bg-btnPrimary uppercase text-white rounded hover:bg-orange hover:text-white hover:font-bold"
          onClick={openModals}
        >
          Add New Product
        </button>
      </div>

      <Product icon={true} />

      <Modal isOpen={isOpen} closeModal={closeModal}>
        <AddProductModal closeModal={closeModal} />
      </Modal>
    </div>
  );
};

export default HomeContainer;
