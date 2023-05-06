import React from "react";
import { Banner, Details, Product } from "../components/productPage";
import { TopGames } from "../components/home";
import { cardData } from "../constants";

function ProductPage(props) {
  return (
    <>

      <div className="paddingX background-dark pb-10">
        <Product product={cardData[0]} />
        <TopGames />
      </div>
    </>
  );
}

export default ProductPage;
