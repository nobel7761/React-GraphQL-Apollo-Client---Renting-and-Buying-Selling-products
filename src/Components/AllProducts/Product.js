import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { GET_ALL_PRODUCTS } from "../../queries/gql-queries";
import Icon from "../Shared/Icon/Icon";
import LoadingSpinner from "../Shared/LoadingSpinner/LoadingSpinner";
import { FaTrash } from "react-icons/fa";
import Modal from "../Shared/Modal/Modal";
import RemoveProduct from "../Shared/Modal/RemoveProduct";

const Product = ({ icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModals = () => {
    setIsOpen(true);
  };
  const { data, loading, error } = useQuery(GET_ALL_PRODUCTS);
  console.log("products", data);

  if (loading) return <LoadingSpinner />;
  if (error) return <p>Something Wrong!!!</p>;
  return (
    <div className="w-8/12 mx-auto">
      {data.Products.map((product) => {
        return (
          <div
            key={product.id}
            className="border border-black rounded p-4 m-4 px-8 flex flex-col gap-y-2"
          >
            <div className="flex justify-between items-center">
              <p className="font-bold text-2xl">{product.name}</p>
              {icon && (
                <Icon
                  name={FaTrash}
                  className="mr-10 text-2xl hover:text-orange cursor-pointer"
                  onClick={openModals}
                />
              )}
            </div>
            <p className="text-gray-500 font-semibold">
              Categories:{" "}
              {product.category_id === 1
                ? "Electronics"
                : product.category_id === 2
                ? "Furniture"
                : product.category_id === 3
                ? "Home Appliance"
                : product.category_id === 4
                ? "Sporting Goods"
                : product.category_id === 5
                ? "Outdoor"
                : product.category_id === 6
                ? "Toys"
                : "null"}
            </p>
            <p className="text-gray-500 font-semibold">
              Price: ${product.price}
            </p>

            <p className="text-sm">
              {product.description.length > 500
                ? `${product.description.slice(0, 500)}...`
                : product.description}
            </p>
            <p className="text-gray-500 font-semibold ">
              Date Posted: {product.created_at.slice(0, 10)}
            </p>
          </div>
        );
      })}

      <Modal isOpen={isOpen} closeModal={closeModal} maxWidth="max-w-md">
        <RemoveProduct closeModal={closeModal} />
      </Modal>
    </div>
  );
};

export default Product;
