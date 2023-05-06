import React, { useEffect, useState } from "react";
import { Card } from "../partials";
import { cardData } from "../../constants";

function Favorites(props) {
  return (
    <div className="row">
      <div className="col-12">
        <h1 className="font-clash text-white mb-5">
          My <span className="text-gradient">Favorites</span>
        </h1>
      </div>
      {cardData?.map((favorite, key) => (
        <div className="col-12 col-md-6 col-lg-4 my-3" key={key}>
          <Card product={favorite} />
        </div>
      ))}
    </div>
  );
}

export default Favorites;
