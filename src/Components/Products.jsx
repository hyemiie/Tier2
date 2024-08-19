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
import sectionImage from "../Images/Slice 11.png";
import Footer from "./Footer";
import CustomAlert from "./CustomAlert";

function Products() {
  var [products, setProducts] = useState([]);
  const [drawers, setDrawers] = useState([]);
  const [quantities, setQuantities] = useState({}); // Use an object to store individual quantities
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const showAlert = (message) => {
    setAlertMessage(message);
    setAlertVisible(true);
  };

  const handleAlertClose = () => {
    setAlertVisible(false);
    setAlertMessage("");
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    console.log(product);
  };

  useEffect(() => {
    const getAPIData = async () => {
      try {
        const response = await axios.get("https://tierfrontend2.onrender.com/products");
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
      .post("https://tierfrontend2.onrender.com/api/cart/add", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then(() => {
        console.log("Product added to cart");
        showAlert("Product added");
      })
      .catch((error) => {
        console.error(error);
        // Show only the error message instead of the entire error object
        showAlert(error.message);
      });
  };
  

  const handleAddToCart2 = (product) => {
    const data = {
      productId: product.product_ID,
      user_id: localStorage.getItem("user_id"),
    };
    console.log(product.product_ID);

    axios
      .post("https://tierfrontend2.onrender.com/add_to_cart/" + product.product_ID, data, {
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


  const showAllProducts = async () => {
    try {
      const response = await axios.get("https://tierfrontend2.onrender.com/products");
      const productList = response.data.products;
  
      const filterBySection = (data, section) => {
        return data.filter((item) => item.product_name.toLowerCase().includes(section.toLowerCase()));
      };
  
      const Sdrawers = filterBySection(productList, "");
      console.log("Sdrawers", Sdrawers);
  
      if (Sdrawers.length > 0) {
        setProducts(Sdrawers);
        console.log("Filtered products", Sdrawers);
      } else {
        setProducts(productList);
        console.log("All products", productList);
      }
  
      const initialQuantities = {};
      Sdrawers.forEach((product) => {
        initialQuantities[product.product_ID] = 0;
      });
      setQuantities(initialQuantities);
    } catch (error) {
      console.error("Error:", error);
    }
  };





  const showMosturizers = async () => {
    try {
      const response = await axios.get("https://tierfrontend2.onrender.com/products");
      const productList = response.data.products;
  
      const filterBySection = (data, section) => {
        return data.filter((item) => item.product_name.toLowerCase().includes(section.toLowerCase()));
      };
  
      const Sdrawers = filterBySection(productList, "moisture");
      console.log("Sdrawers", Sdrawers);
  
      if (Sdrawers.length > 0) {
        setProducts(Sdrawers);
        console.log("Filtered products", Sdrawers);
      } else {
        setProducts(productList);
        console.log("All products", productList);
      }
  
      const initialQuantities = {};
      Sdrawers.forEach((product) => {
        initialQuantities[product.product_ID] = 0;
      });
      setQuantities(initialQuantities);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  const showSerums = async () => {
    try {
      const response = await axios.get("https://tierfrontend2.onrender.com/products");
      const productList = response.data.products;

      const filterBySection = (data, section) => {
        return data.filter((item) => item.product_name.toLowerCase().includes(section.toLowerCase()));
      };

      const chairs = filterBySection(productList, "Serum");
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

  const showMists = async () => {
    try {
      const response = await axios.get("https://tierfrontend2.onrender.com/products");
      const productList = response.data.products;

      const filterBySection = (data, section) => {
        return data.filter((item) => item.product_name.toLowerCase().includes(section.toLowerCase()));
      };
      const chairs = filterBySection(productList, "Mist");
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


  const showToner = async () => {
    try {
      const response = await axios.get("https://tierfrontend2.onrender.com/products");
      const productList = response.data.products;

      const filterBySection = (data, section) => {
        return data.filter((item) => item.product_name.toLowerCase().includes(section.toLowerCase()));
      };

      const chairs = filterBySection(productList, "Toner");
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


  const showCleaners = async () => {
    try {
      const response = await axios.get("https://tierfrontend2.onrender.com/products");
      const productList = response.data.products;

      const filterBySection = (data, section) => {
        return data.filter((item) => item.product_name.toLowerCase().includes(section.toLowerCase()));
      };

      const chairs = filterBySection(productList, "Clean");
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
      const response = await axios.get("https://tierfrontend2.onrender.com/products");
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
          <button
            onClick={() => setSelectedProduct(null)}
            className="responsivecancel"
          >
            <FontAwesomeIcon icon={faX} />
          </button>
          <img
            src={`https://tierfrontend2.onrender.com${product.product_image}`}
            alt=""
            className="PImage"
          />

          <div className="cover">.</div>
        </div>

        <div className="cardHalf2">
          <p className="productCardDetails">
            <h2 className="productCname">{product.product_name} </h2>{" "}
            <h3>By Tier</h3>
          </p>

          <p className="productCdesc">{product.product_desc}</p>

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
        <button onClick={() => setSelectedProduct(null)} className="cancel">
          <FontAwesomeIcon icon={faX} />
        </button>
      </div>
    </div>
  );

  return (
    <div className="productBody">
      {alertVisible && (
        <CustomAlert message={alertMessage} onClose={handleAlertClose} />
      )}
      <div className="seconddivision">
        <div className="viewDetails">
          <h1> Tier Product Section</h1>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed{" "}
            <br></br>do eiusmod tempor incididunt ut labore et dolore magna
            aliqua
          </h3>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed </h3>
          <button>View More</button>
        </div>
        <div className="sectionImg"></div>
      </div>

      <div className="ResponsieviewDet">
          <h1> Tier Product Section</h1>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
           do eiusmod tempor incididunt ut labore et dolore magna
            aliqua
          </h3>
          <button>View More</button>
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
              <button className="searchBtn">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  onClick={seearchFunction}
                  className="searchIcon"
                />
              </button>
            </div>

            {/* <span className="divider"></span> */}
            {/* <span className="sort"> Shop by Categories</span> */}

            <div className="buttons">
            <button className="btn tableImage" onClick={showAllProducts}>
                <h3 id="productTag" onClick={showAllProducts}>All</h3>
              </button>
              <button className="btn tableImage" onClick={showMosturizers}>
                <h3 id="productTag" onClick={showMosturizers}>Moisturizers</h3>
              </button>
              
              <button className="btn chairImage " onClick={showSerums}>
                {" "}
                <h3 id="productTag" onClick={showSerums}>
                  Serums
                </h3>
              </button>
              <button className="btn deskImage" onClick={showMists}>
                {" "}
                <h3 id="productTag" onClick={showMists}>
                  Mists
                </h3>
              </button>
              <button className="btn lampImage" onClick={showToner}>
                {" "}
                <h3 id="productTag" onClick={showToner}>
                  Toners
                </h3>
              </button>
              <button className="btn SideDrawerImage" onClick={showCleaners} >
                {" "}
                <h3 id="productTag" onClick={showCleaners}>Cleaners</h3>
              </button>{" "}
            </div>
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
                  src={`https://tierfrontend2.onrender.com${product.product_image}`}
                  alt=""
                  className="PImage"
                />
                <div className="rateCover"></div>
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
        </div>
        {selectedProduct ? (
          <ProductCard product={selectedProduct} className="viewProduct" />
        ) : (
          ""
        )}
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default Products;
