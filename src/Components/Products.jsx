import React, { useState, useEffect } from "react";
import axios from "axios";
import "./product.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({}); // Use an object to store individual quantities

  useEffect(() => {
    const getAPIData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/products");
        const productList = response.data.products;

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
    };

    getAPIData();
  }, []);

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
      .post("http://localhost:5000/api/cart/add", data, {
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

  const handleAddToCart2 = (product) => {
    const data = {
      productId: product.product_ID,
      user_id: localStorage.getItem("user_id"),
    };
    console.log(product.product_ID);

    axios
      .post("http://localhost:5000/add_to_cart/" + product.product_ID, data, {
        withCredentials: true, // Make sure to send cookies
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
    <div>
      {/* <div className="heading">
        <span className="design">Hi </span>
        <h2 className="companyName">Limi</h2>
        <span className="box">HI </span>
      </div> */}

      <div className="seconddivision">
        <h4>Products</h4>
        <input type="search" name="" id="search" placeholder="Search..." />
      </div>

      <div className="mainHalf">
        <div className="cat">
          {/* <span className="sort"> SORT</span> */}

          <div className="filter">
            <h3>CHOOSE CATEGORY</h3>
            <span className="buttons">
              <button className="btn">Table</button>
              <button className="btn">Chairs</button>
              <button className="btn">Desks</button>
              <button className="btn">Lamps</button>
              <button className="btn">Beenie bag</button>
            </span>
          </div>
        </div>

        <div className="productContainer">
          {products.map((product) => (
            <div key={product.product_ID} className="productCard">
              <div className="productName">{product.product_name}</div>
              <div className="productDesc">{product.product_desc}</div>
              <span className="productImage">
                <img
                  src={`http://localhost:5000${product.product_image}`}
                  alt=""
                  className="PImage"
                />
              </span>
              <div className="productPrice">{product.product_price}</div>
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
              <div>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="add"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
