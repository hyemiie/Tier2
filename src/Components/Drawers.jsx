import React, { useState, useEffect } from "react";
import axios from "axios";
import "./product.css";

function Drawers() {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [drawers, setDrawers] = useState([]);
  const showDrawers = async () => {
    try {
      const response = await axios.get("https://tierfrontend2.onrender.com/products");
      const productList = response.data.products;

      console.log(productList[0].product_desc);

      productList.forEach((product) => {
        if (product.product_desc == "Drawer") {
          console.log("yes");
          console.log(product);
          setDrawers(product);
          console.log(drawers);
        } else {
          console.log("nope");
        }
      });

      if (productList.length > 0) {
        setProducts(productList);
        const initialQuantities = {};
        productList.forEach((product) => {
          initialQuantities[product.product_ID] = 0;
        });
        setQuantities(initialQuantities);
      }
    } catch (error) {
      console.error("Error:", error);
    }
    showDrawers();
  };

  const handleChange = (event, productId) => {
    setQuantities({
      ...quantities,
      [productId]: Number(event.target.value),
    });
  };

  const handleAddToCart = (product) => {
    const data = {
      productId: product.product_ID,
      imageUrl: product.product_image,
      name: product.product_name,
      Description: product.product_desc,
      price: product.product_price,
      QTY: quantities[product.product_ID], // Use the corresponding quantity for the product
      user_id: localStorage.getItem("user_id"),
    };

    console.log(data.productId);

    axios
      .post("https://tierfrontend2.onrender.com/api/cart/add", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })

      .then(() => {
        console.log("Product added to cart");
        // Update UI with success message, if needed
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="productContainer">
      {drawers.map((product) => (
        <div key={product.product_ID} className="productCard">
          <div className="productImage">
            <img
              src={`https://tierfrontend2.onrender.com${product.product_image}`}
              alt=""
              className="PImage"
            />
          </div>
          {/* <div className="productDesc">{product.product_desc}</div> */}

          <div className="productDetails">
            <div className="productName">{product.product_name}</div>

            <div className="productPrice">${product.product_price}</div>
            <input
              type="number"
              name="Quantity"
              id={`Quantity_${product.product_ID}`}
              value={quantities[product.product_ID]}
              onChange={(event) => handleChange(event, product.product_ID)}
              min={0}
              max={10}
              className="qty"
            />
            <button onClick={() => handleAddToCart(product)} className="add">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Drawers;
