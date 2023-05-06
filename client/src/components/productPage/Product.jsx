import React from "react";
import { Cart, CartFill, HeartFill, StarFill } from "react-bootstrap-icons";

function Product({ product }) {
  return (
    <div className="row pt-10">
      <div className="col-6">
        <img
          src={`${product?.image}`}
          alt=""
          className="img-fluid rounded-border"
        />
      </div>
      <div className="col-6 background-gray rounded-border p-5">
        <div className="row">
          <div className="col-8 my-auto">
            {" "}
            <h1 className="font-clash paraColor">{product?.name}</h1>
          </div>
          <div className="col-4 my-auto">
            <StarFill color="#b58900" className="mr-2" />
            <StarFill color="#b58900" className="mr-2" />
            <StarFill color="#b58900" className="mr-2" />
            <StarFill color="#b58900" className="mr-2" />
            <StarFill color="#b58900" className="mr-2" />
          </div>
        </div>

        <p className="font-clash paraColor mt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
          distinctio laborum iste maiores facilis velit, earum beatae laudantium
        </p>

        <p className="secondary h5">$323.00</p>

        <p className="font-clash paraColor h6 mt-4">Genre: Action</p>

        <p className="font-clash paraColor h6 mt-4">In Stock: 1203</p>

        <div className="row mt-4">
          <div className="col-6">
            <button className="btn btn-lg background-secondary rounded-pill w-100">
              <HeartFill className="mr-2"/>
              Add to Favorites
            </button>
          </div>
          <div className="col-6">
            <button className="btn btn-lg background-secondary rounded-pill w-100">
              <CartFill className="mr-2"/>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
