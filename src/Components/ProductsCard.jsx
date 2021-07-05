import React, { useState, useEffect } from "react";
import { getproduct } from "../Components/service/service.js";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductCard = () => {
  let [productdatas, setProductDatas] = useState([]);

  useEffect(() => {
    productdatas = getproduct();
    setProductDatas(productdatas);
  }, []);

  return (
    <div className="container-fluid row d-flex justify-content-center ">
      {productdatas.map((product) => (
        <div className="card mr-1 mt-3 col-md-3 bg-info" key={product._id}>
          <img
            src={product.image}
            className="card-img-top rounded mt-2 "
            height="200px"
            width="30px"
            alt={product.img}
          />
          <div className="card-body">
            <p className="text-uppercase font-weight-bold">{product.title}</p>
            <p className="text-uppercase font-weight-bold">{product.star}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ProductCard;
