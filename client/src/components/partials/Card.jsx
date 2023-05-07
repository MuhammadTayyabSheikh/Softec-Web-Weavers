import React, { useEffect, useState } from "react";
import { topNFTs, cardData } from "../../constants";
import { crypto } from "../../assets";
import { Cart, CartFill, Heart, HeartFill } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../api/UsersAPI";

function Card({ product }) {
  return (
    <div>
      <div
        className="card background-gray p-3 rounded-border text-white pulse position-relative"
        style={{ width: "100%" }}
      >
        <img
          style={{
            height: "250px",
            objectFit: "cover",
            objectPosition: "center",
          }}
          className="card-img-top rounded pointer"
          src={`${product.image}`}
          alt="Card image"
        />
        <div

          className="background-dark pointer position-absolute top-3 right-4 circle"
          style={{
            top: '23px',
            right: '25px',
            padding: '6px 8px'
          }}>
          <Heart
            size={"20px"}

            color='red'
          //   onClick={handleAddFavorite}
          />
        </div>
        <div className="card-body px-3 py-0">
          <div className="row my-3">
            <div className="col-10 pl-0">
              <p className="h5 my-0 font-clash text-truncate w-100 mb-2">{product.title}</p>
            </div>
            <div className="col-1 ml-3">
              <CartFill
                size={"20px"}
                className="pointer"
                color='#b58900'
                onClick={() => {
                  console.log(product._id)
                  addToCart({itemId: product._id}).then (res => {
                    console.log(res)
                  }).catch(err => {
                    console.log(err)
                  })
                  
                  ;
                }}
              />
            </div>
            <p className="two-lines m-0" style={{ maxHeight: '60px' }} >
              {product.description}
            </p>

          </div>
          <div className="row my-2">
            <div className="col-4 p-0">
              <p className="my-0 h5 secondary">
                Rs {product.marketPrice}
              </p>
            </div>
            <div className="col-4">
              <p className="my-0">
                {product.stock}{' '}

                <small>
                  left
                </small>
              </p>
            </div>
            <div className="col-4">
              <p className="my-0 red">
                {product.minAge}+
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
