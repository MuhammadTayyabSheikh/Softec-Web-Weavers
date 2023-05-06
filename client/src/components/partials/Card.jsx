import React, { useEffect, useState } from "react";
import { topNFTs, cardData } from "../../constants";
import { crypto } from "../../assets";
// import { Base_URL } from "../../url";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

function Card({ product }) {


 

  return (
    <div>
      <div
        className="card background-gray p-3 rounded-border text-white pulse"
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
        //   onClick={() => navigate(`/nft/${nftId}`)}
        />
        <div className="card-body p-0">
          <div className="row my-3">
            <div className="col-2">
              <div
                style={{
                  backgroundColor: "#ff0",
                  width: "20px",
                  height: "20px",
                  borderRadius: "10px",
                }}
              ></div>
              {/* <img className="rounded img-fluid" src={nft?.profile} alt="Card image cap" /> */}
            </div>
            <div className="col-8 pl-0">
              <p className="h6 my-0 font-clash">{product.name}</p>
              <p className="my-0"></p>
            </div>

            <div className="col-2">
             
                <Heart
                  size={"20px"}
                  className="pointer"
                //   onClick={handleAddFavorite}
                />
             
            </div>
          </div>
          <div className="row my-2">
            <div className="col-4">
              {/* <p className="h6 my-0 font-clash">{nft?.latestBid} ETH</p> */}
              <p className="my-0">Latest Bid</p>
            </div>
            <div className="col-4">
              {/* <p className="h6 my-0 font-clash">{nft?.price} ETH</p> */}
              <p className="my-0">From</p>
            </div>
            <div className="col-4">
              {/* <p className="h6 my-0 font-clash">{nft?.price * 1534.27}</p> */}
              <p className="my-0 green">
                {/* +{100 * ((nft?.latestBid - nft?.price) / nft?.price)}% */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
