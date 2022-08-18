import React, { useRef, useState } from "react";
import MultiSelect from "../../MultiSelect";
import CustomListBox from "../CustomListBox";

const service = [
  { type: 'Rent' },
  { type: 'Sell' },
]

const AddProductModal = ({ closeModal }) => {
  const [serviceType, setServiceType] = useState()
  const titleRef = useRef("");
  const descriptionRef = useRef("");
  const priceRef = useRef("");
  const rentRef = useRef("");

  const handleSubmit = event => {
    event.preventDefault();

    const title = titleRef.current.value
    const description = descriptionRef.current.value
    const price = priceRef.current.value
    const rentPrice = rentRef.current.value
    const service = serviceType;

    console.log("FormSubmission", title, description, price, rentPrice, service);


  }

  return (
    <div /* onClick={closeModal} */>
      <form onSubmit={handleSubmit}>
        <div className="my-3">
          <h1 className="text-lg font-medium">Title</h1>
          <input type="text" ref={titleRef} className="w-full border border-gray-400 rounded my-1 py-2 px-2" />
        </div>

        <div className="my-3">
          <h1 className="text-lg font-medium">Categories</h1>
          <MultiSelect />
        </div>

        <div className="my-3">
          <h1 className="text-lg font-medium">Description</h1>
          <textarea ref={descriptionRef} rows="6" className="w-full border border-gray-400 rounded my-1 py-2 px-2"></textarea>
        </div>

        <div className="flex justify-between items-center gap-x-10 my-3">
          <div>
            <h1 className="text-lg font-medium">Price</h1>
            <input type="number" ref={priceRef} className="w-full border border-gray-400 rounded my-1 py-2 px-2" />
          </div>

          <div>
            <h1 className="text-lg font-medium">Rent</h1>
            <input type="number" ref={rentRef} className="w-full border border-gray-400 rounded my-1 py-2 px-2" />
          </div>


          <CustomListBox options={service} setServiceType={setServiceType} />
        </div>
        <div className="flex flex-row-reverse mt-4">
          <button type="submit" className="bg-btnPrimary text-white text-sm py-2 px-3 rounded" onClick={closeModal}>Add Product</button>
        </div>
      </form>
    </div>
  );
};

export default AddProductModal;
