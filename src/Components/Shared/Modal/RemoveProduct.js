import React from "react";

const RemoveProduct = ({ closeModal }) => {
  return (
    <div>
      <h1 className="font-bold mb-6 text-center">
        Are you sure you want to delete this product?
      </h1>

      <div className="flex gap-x-4 flex-row-reverse">
        <button
          className="bg-btnDanger text-white p-2 px-3 rounded"
          onClick={closeModal}
        >
          No
        </button>
        <button className="bg-btnPrimary text-white p-2 px-3 rounded">
          Yes
        </button>
      </div>
    </div>
  );
};

export default RemoveProduct;
