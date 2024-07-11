import React, { useState, useEffect } from "react";
import axios from "axios";
import "./product.css";
import tableImage from "./wooden.png";
import Drawers from "./Drawers";
import { useTrail } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faMagnifyingGlass,
  faBars,
  faArrowLeft,
  faCancel,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";
import sectionImage from "../Images/products/sideboard/fusion1.jpg"

function Products() {
  var [products, setProducts] = useState([]);
  const [drawers, setDrawers] = useState([]);
  const [quantities, setQuantities] = useState({}); // Use an object to store individual quantities
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    console.log(product);
  };

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
        alert("Product added");
      })
      .catch((error) => {
        console.error(error);
        alert(error);
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

  // const filterBySection = (data, section) => {
  //   return data.filter((item) => item.product_desc === section);
  // };

  // const chairs = filterBySection(productList, "Drawer"); // Change 'Living Room' to 'Chairs' for chair section

  // console.log(chairs);
  const showDrawers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/products");
      const productList = response.data.products;

      const filterBySection = (data, section) => {
        return data.filter((item) => item.product_desc === section);
      };

      const drawers = filterBySection(productList, "Drawer");
      setDrawers(drawers);
      console.log("drawers", drawers);

      if (drawers.length > 0) {
        setProducts(drawers);
        console.log("No", products);
      } else {
        setProducts(productList);
        console.log("yes", products);
      }

      const initialQuantities = {};
      products.forEach((product) => {
        initialQuantities[product.product_ID] = 0;
      });
      setQuantities(initialQuantities);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const showChairs = async () => {
    try {
      const response = await axios.get("http://localhost:5000/products");
      const productList = response.data.products;

      const filterBySection = (data, section) => {
        return data.filter((item) => item.product_desc === section);
      };

      const chairs = filterBySection(productList, "Chair");
      setDrawers(chairs);
      console.log("drawers", drawers);

      if (drawers.length > 0) {
        setProducts(drawers);
        console.log("No", products);
      } else {
        setProducts(productList);
        console.log("yes", products);
      }

      const initialQuantities = {};
      products.forEach((product) => {
        initialQuantities[product.product_ID] = 0;
      });
      setQuantities(initialQuantities);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const showDesks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/products");
      const productList = response.data.products;

      const filterBySection = (data, section) => {
        return data.filter((item) => item.product_desc === section);
      };

      const chairs = filterBySection(productList, "Desk");
      setDrawers(chairs);
      console.log("drawers", drawers);

      if (drawers.length > 0) {
        setProducts(drawers);
        console.log("No", products);
      } else {
        setProducts(productList);
        console.log("yes", products);
      }

      const initialQuantities = {};
      products.forEach((product) => {
        initialQuantities[product.product_ID] = 0;
      });
      setQuantities(initialQuantities);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const input = (e) => {
    setSearchInput(e.target.value);
    console.log(searchInput);
  };

  const seearchFunction = async () => {
    try {
      const response = await axios.get("http://localhost:5000/products");
      const productList = response.data.products;

      const filterBySection = (data, section) => {
        return data.filter((item) => item.product_name.includes(section));
      };

      const chairs = filterBySection(productList, searchInput);
      console.log("searchInput", searchInput);
      setSearchResult(chairs);
      console.log("searchResult", chairs);

      // setProducts(chairs);
      // console.log("No", products);

      if (chairs.length > 0) {
        setProducts(chairs);
        console.log("Products", products);
      } else {
        setProducts(productList);
        console.log("No products", products);
        // alert("Sorry, seems like thats not in stock");
      }

      const initialQuantities = {};
      products.forEach((product) => {
        initialQuantities[product.product_ID] = 0;
      });
      setQuantities(initialQuantities);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const ProductCard = ({ product }) => (
    <div className="cardContainer">
   
    <div className="product-card">
   
    <div className="cardImage">
    
    <img
        src={`http://localhost:5000${product.product_image}`}
        alt=""
        className="PImage"
      /></div>

      <div className="cardHalf2">
      
      <p><h2>{product.product_name} </h2>      <h3>By Tier</h3></p>

      <p>{product.product_desc}</p>
      
     
      <p>
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
      </p>
      <button onClick={() => handleAddToCart(product)} className="add">
        Add to Cart
      </button>
      </div>
      <button onClick={() => setSelectedProduct(null)} className="cancel"  >
      <FontAwesomeIcon icon={faX} />
    </button>
    </div>
    </div>
  );

  return (
    <div className="productBody">
      <div className="seconddivision">
      <div className="viewDetails">
        <h1> Tier Product Section</h1>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed <br></br>do eiusmod tempor incididunt ut labore et dolore magna aliqua</h3>
        <button>View More</button>
        </div>
        <div className="sectionImg">
          <img src={sectionImage} className="sectionImg"/>
        </div>
        {/* <input type="search" name="" id="search" placeholder="Search..." /> */}
      </div>

      <div className="mainHalf">
        <div className="cat">

          <div className="filter">
            <div className="inputProduct">
              <input
                type="text"
                name=""
                id="searchProducts"
                onChangeCapture={input}
                onChange={seearchFunction}
              />
              <button className="inputSearch">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  onClick={seearchFunction}
                />
              </button>
            </div>

            {/* <span className="divider"></span> */}
            {/* <span className="sort"> Shop by Categories</span> */}

            <span className="buttons">
            
                <button className="btn tableImage"></button>
                <h3 id="productTag">Tables</h3>
                <button
                  className="btn chairImage "
                  onClick={showChairs}
                ></button>
                <h3 id="productTag" onClick={showChairs}>Chairs</h3>
           <button className="btn deskImage" onClick={showDesks}></button>
                <h3 id="productTag" onClick={showDesks}>Desks</h3>
                <button
                  className="btn lampImage"
                  onClick={showDrawers}
                ></button>
                <h3 id="productTag"                   onClick={showDrawers}
>Lamps</h3>
           
                <button className="btn SideDrawerImage"></button>{" "}
                <h3 id="productTag">Side Tables</h3>
             
            </span>
          </div>
        </div>

        <div className="productContainer">
          {products.map((product) => (
            <div
              key={product.product_ID}
              className="productCard"
              onClick={() => handleProductClick(product)}
            >
              <div className="productImage">
                <img
                  src={`http://localhost:5000${product.product_image}`}
                  alt=""
                  className="PImage"
                />
              </div>
              {/* <div className="productDesc">{product.product_desc}</div> */}

              <div className="productDetails">
                <div className="productName">{product.product_name}</div>

                <div className="productPrice">${product.product_price}</div>

                <button
                  onClick={() => handleAddToCart(product)}
                  className="add"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
          <Drawers />
        </div>
        {selectedProduct ? (
        <ProductCard product={selectedProduct} className="viewProduct" />
      ) : (
        ""
      )}
      </div>
   
    </div>
  );
}

export default Products;
