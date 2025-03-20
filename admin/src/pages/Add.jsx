import React, { useState } from "react";
import { CiImageOn } from "react-icons/ci";
import axios from "axios";
import { backendUrl } from "../App";
import toast from "react-hot-toast";

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(
        backendUrl + "/api/product/add",
        formData,
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        setName("");
        setDescription("");
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setSizes([]);
        setPrice("");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col w-full items-start gap-3"
    >
      {/* IMAGE UPLOAD */}
      <div>
        <p>Upload Image</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 my-3">
          <label htmlFor="image1">
            <div className="relative h-30 md:h-48 max-w-54 rounded-lg border-1 border-gray-500 bg-gray-50 flex justify-center items-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div className="absolute flex flex-col items-center">
                {!image1 ? (
                  <>
                    <CiImageOn className="mb-3 text-2xl md:text-6xl" />
                    <span className="block text-gray-400 text-center font-normal mt-1">
                      click to upload Image
                    </span>
                  </>
                ) : (
                  <img
                    src={URL.createObjectURL(image1)}
                    className="object-cover  h-28 md:h-48"
                    alt=""
                  />
                )}
              </div>

              <input
                onChange={(e) => setImage1(e.target.files[0])}
                id="image1"
                className="h-full w-full opacity-0 cursor-pointer"
                type="file"
              />
            </div>
          </label>
          <label htmlFor="image2">
            <div className="relative h-30 md:h-48 max-w-54 rounded-lg border-1 border-gray-500 bg-gray-50 flex justify-center items-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div className="absolute flex flex-col items-center">
                {!image2 ? (
                  <>
                    <CiImageOn className="mb-3 text-2xl md:text-6xl" />
                    <span className="block text-gray-400 text-center font-normal mt-1">
                      click to upload Image
                    </span>
                  </>
                ) : (
                  <img
                    src={URL.createObjectURL(image2)}
                    className="object-cover  h-28 md:h-48"
                    alt=""
                  />
                )}
              </div>

              <input
                onChange={(e) => setImage2(e.target.files[0])}
                id="image2"
                className="h-full w-full opacity-0 cursor-pointer"
                type="file"
              />
            </div>
          </label>
          <label htmlFor="image3">
            <div className="relative h-30 md:h-48 max-w-54 rounded-lg border-1 border-gray-500 bg-gray-50 flex justify-center items-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div className="absolute flex flex-col items-center">
                {!image3 ? (
                  <>
                    <CiImageOn className="mb-3 text-2xl md:text-6xl" />
                    <span className="block text-gray-400 text-center font-normal mt-1">
                      click to upload Image
                    </span>
                  </>
                ) : (
                  <img
                    src={URL.createObjectURL(image3)}
                    className="object-cover h-28 md:h-48"
                    alt=""
                  />
                )}
              </div>

              <input
                onChange={(e) => setImage3(e.target.files[0])}
                id="image3"
                className="h-full w-full opacity-0 cursor-pointer"
                type="file"
              />
            </div>
          </label>
          <label htmlFor="image4">
            <div className="relative h-30 md:h-48 max-w-54 rounded-lg border-1 border-gray-500 bg-gray-50 flex justify-center items-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div className="absolute flex flex-col items-center">
                {!image4 ? (
                  <>
                    <CiImageOn className="mb-3 text-2xl md:text-6xl" />
                    <span className="block text-gray-400 font-normal text-center mt-1">
                      click to upload Image
                    </span>
                  </>
                ) : (
                  <img
                    src={URL.createObjectURL(image4)}
                    className="object-cover h-48"
                    alt=""
                  />
                )}
              </div>

              <input
                onChange={(e) => setImage4(e.target.files[0])}
                id="image4"
                className="h-full w-full opacity-0 cursor-pointer"
                type="file"
              />
            </div>
          </label>
        </div>
      </div>
      {/* PRODUCT NAME */}
      <div className="w-full">
        <p className="mb-3 font-medium text-gray-900">Product Name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Type Here"
          className="w-full max-w-[500px] px-3 py-2"
          required
        />
      </div>
      {/* PRODUCT DESCRIPTION */}
      <div className="w-full">
        <p className="mb-3 font-medium text-gray-900">Product description</p>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          type="text"
          placeholder="Write content here"
          className="w-full max-w-[500px] px-3 py-2"
          required
        />
      </div>
      {/* CATEGORY */}
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div>
          <p className="font-medium text-gray-900">Product Category</p>
          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            id="ProductCategory"
            className="mt-1.5 w-full px-5 py-2 rounded-lg border-gray-300 text-gray-700 sm:text-sm"
          >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">KIds</option>
          </select>
        </div>
        {/* SUB CATEGORY */}
        <div>
          <p className="font-medium text-gray-900">Sub Category</p>
          <select
            onChange={(e) => setSubCategory(e.target.value)}
            value={subCategory}
            id="SubCategory"
            className="mt-1.5 w-full px-5 py-2 rounded-lg border-gray-300 text-gray-700 sm:text-sm"
          >
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>
        {/* PRODUCT PRICE */}
        <div>
          <p className="text-gray-900 font-medium">Product Price</p>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            type="Number"
            className="px-5 py-2 w-full sm:w-[120px]"
            placeholder="₹25"
            required
            id=""
          />
        </div>
      </div>

      {/* SIZES */}
      <div className="mb-3">
        <p>Product Sizes</p>
        <div className="flex gap-3">
          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("S")
                  ? prev.filter((item) => item !== "S")
                  : [...prev, "S"]
              )
            }
          >
            <p
              className={`${
                sizes.includes("S")
                  ? "border-violet-900 border-1 bg-violet-400 text-white"
                  : " bg-violet-100"
              } px-3 py-1 cursor-pointer `}
            >
              S
            </p>
          </div>

          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("M")
                  ? prev.filter((item) => item !== "M")
                  : [...prev, "M"]
              )
            }
          >
            <p
              className={`${
                sizes.includes("M")
                  ? "border-violet-900 border-1 bg-violet-400 text-white"
                  : " bg-violet-100"
              } px-3 py-1 cursor-pointer `}
            >
              M
            </p>
          </div>

          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("L")
                  ? prev.filter((item) => item !== "L")
                  : [...prev, "L"]
              )
            }
          >
            <p
              className={`${
                sizes.includes("L")
                  ? "border-violet-900 border-1 bg-violet-400 text-white"
                  : " bg-violet-100"
              } px-3 py-1 cursor-pointer `}
            >
              L
            </p>
          </div>

          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("XL")
                  ? prev.filter((item) => item !== "XL")
                  : [...prev, "XL"]
              )
            }
          >
            <p
              className={`${
                sizes.includes("XL")
                  ? "border-violet-900 border-1 bg-violet-400 text-white"
                  : " bg-violet-100"
              } px-3 py-1 cursor-pointer `}
            >
              XL
            </p>
          </div>

          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("XXL")
                  ? prev.filter((item) => item !== "XXL")
                  : [...prev, "XXL"]
              )
            }
          >
            <p
              className={`${
                sizes.includes("XXL")
                  ? "border-violet-900 border-1 bg-violet-400 text-white"
                  : " bg-violet-100"
              } px-3 py-1 cursor-pointer `}
            >
              XXL
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-2 mt-2">
        <input
          onChange={() => setBestseller((prev) => !prev)}
          checked={bestseller}
          type="checkbox"
          name=""
          id="bestseller"
        />
        <label className="cursor-pointer" htmlFor="bestseller">
          Add to Bestseller
        </label>
      </div>

      <button
        type="submit"
        className="w-28 py-3 mt-4 bg-violet-600 hover:bg-violet-900  rounded text-white cursor-pointer"
      >
        ADD
      </button>
    </form>
  );
};

export default Add;
