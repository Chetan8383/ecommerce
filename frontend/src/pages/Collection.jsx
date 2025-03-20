import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { CiCircleChevRight } from "react-icons/ci";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const appliyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let filterProductsCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(filterProductsCopy.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setFilterProducts(filterProductsCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        appliyFilter();
        break;
    }
  };

  useEffect(() => {
    setFilterProducts(products);
  }, []);

  useEffect(() => {
    appliyFilter();
  }, [category, subCategory, search, showSearch, products]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className=" flex flex-col lg:flex-row gap-6 sm:gap-8 sm-gap-10 pt-10 border-t border-gray-200">
      {/* FILTER OPTIONS */}
      <div className="min-w-50">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="saira-font text-xl flex items-center cursor-pointer "
        >
          FILTERS
          <CiCircleChevRight
            className={`sm:hidden ms-2 ${showFilter ? "rotate-90" : ""}`}
          />
        </p>

        {/* CATEGORY FILTER*/}
        <div
          className={`border border-gray-500 rounded-xl pl-5 py-5 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Men"}
                onChange={toggleCategory}
              />
              Men
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Women"}
                onChange={toggleCategory}
              />
              Women
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Kids"}
                onChange={toggleCategory}
              />
              Kids
            </p>
          </div>
        </div>
        {/* Sub CATEGORY */}
        <div
          className={`border border-gray-700 rounded-xl pl-5 py-5 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Topwear"}
                onChange={toggleSubCategory}
              />
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Bottomwear"}
                onChange={toggleSubCategory}
              />
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Winterwear"}
                onChange={toggleSubCategory}
              />
              Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* Products side or right side */}
      <div className="flex-1 ">
        <div className="flex justify-between flex-col sm:flex-row text-base sm:text-2xl mb-4">
          <Title text1={"All"} text2={"COLLECTIONS"} />
          {/* product sort */}
          <div className=" text-xs sm:text-sm">
            <select
              onChange={(e) => setSortType(e.target.value)}
              className="border mt-1.5 w-2/4 sm:w-full rounded-lg border-gray-500 text-gray-700"
            >
              <option value="relavant">Sort by: Relavant</option>
              <option value="low-high">Sort by : low-high</option>
              <option value="high-low">Sort by : high-low</option>
            </select>
          </div>
        </div>

        {/* Map Products */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default collection;
