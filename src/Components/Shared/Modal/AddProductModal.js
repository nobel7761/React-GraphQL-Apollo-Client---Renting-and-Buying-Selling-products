import React from "react";
import MultiSelect from "../../MultiSelect";

const AddProductModal = ({ closeModal }) => {

  return (
    <div /* onClick={closeModal} */>
      <div className="my-3">
        <h1 className="text-lg font-medium">Title</h1>
        <input type="text" className="w-full border border-gray-400 rounded my-1 py-2 px-2" />
      </div>

      <div className="my-3">
        <h1 className="text-lg font-medium">Categories</h1>
        <MultiSelect />
      </div>

      <div className="my-3">
        <h1 className="text-lg font-medium">Description</h1>
        <textarea name="" rows="6" className="w-full border border-gray-400 rounded my-1 py-2 px-2"></textarea>
      </div>
    </div>
  );
};

export default AddProductModal;
