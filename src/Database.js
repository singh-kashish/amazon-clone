import db from "./firebase";

const productRef = db.collection("products");

import React from "react";

function Database() {
  const handleSubmit = (event) => {
    console.log(event);
  };
  return (
    <div className="create__form">
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input type="text" />
        </label>
        <label>
          Image-URL
          <input type="text" />
        </label>
        <label>
          Price
          <input type="text" />
        </label>
        <label>
          Rating
          <input type="number" min="1" max="5" />
        </label>
      </form>
    </div>
  );
}

export default Database;
