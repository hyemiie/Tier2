// import React, { useState } from "react";
// import axios from "axios";
// import { useEffect } from "react";
// import "./cart.css";

// function Cart() {
//   const { PageContent, setPageContent } = useState(" ");

//   const [productImage, setProductImage] = useState("loading...");
//   const [productName, setProductName] = useState("loading...");
//   const [productDesc, setProductDesc] = useState("loading...");
//   const [productPrice, setProductPrice] = useState("loading...");
//   const [productID, setID] = useState("loading...");
//   const [carts, setCarts] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [QTY, setQuantity] = useState(0);
//   const [OverallTotal, setOverallTotal] = useState(0);
//   const [Quantity, setQuantities] = useState(0);

//   useEffect(() => {
//     const getCart = async () => {
//       try {
//         // const userId = localStorage.getItem("user_id");

//         const response = await axios.get("http://localhost:5000/Cart", {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("access_token")}`,
//           },
//         });
//         setCart(response.data.cart_items);
//         console.log(response);

//         if (cart.length > 0) {
//           const {
//             product_ID,
//             product_Name,
//             product_Img,
//             product_Price,
//             product_Desc,
//             product_Quantity,
//           } = Cart[0];

//           setCarts(Cart);
//           console.log(carts);
//           setID(product_ID);
//           setProductImage(product_Img);
//           setProductName(product_Name);
//           setProductDesc(product_Desc);
//           setProductPrice(product_Price);
//           setQuantity(product_Quantity);
//         } else {
//           console.log("Oops..seems like you have nothing in your cart");
//         }
//       } catch (error) {
//         console.error("Error:", error);
//       }
//     };

//     // Call the function when the component mounts
//     getCart();
//   }, []); // The empty dependency array ensures that this effect runs only once, equivalent to componentDidMount

//   const CalculateTotal = (productQuantity, productPrice) => {
//     return productQuantity * productPrice;
//   };

//   useEffect(() => {
//     // Calculate overall total whenever carts change
//     const total = carts.reduce(
//       (acc, cart) =>
//         acc + CalculateTotal(cart.product_Quantity, cart.product_Price),
//       0
//     );

//     setOverallTotal(total);
//   }, [carts]);

//   const handleChange = (event) => {
//     setQuantities(Number(event.target.value));
//   };

//   return (
//     <div className="BDY">
//       <h2>Cart</h2>
//       <div className="cartBody">
//         <div className="productContainer">
//           {carts.map((cart) => (
//             <div key={cart.product_ID} className="CproductCard">
//               <span className="productImage">
//                 <img
//                   src={`http://localhost:5000${cart.product_Img}`}
//                   alt=""
//                   className="PImage"
//                 />
//               </span>
//               <div className="CproductName">{cart.product_Name}</div>
//               <div className="CproductDesc">{cart.product_Desc}</div>
//               <div className="CproductPrice">{cart.product_Price}</div>
//               <div className="CproductQuantity">{cart.product_Quantity}</div>
//               <div className="Total">
//                 Totals : {cart.product_Quantity * cart.product_Price}
//               </div>
//               {/* <input
//               type="number"
//               name="Quantity"
//               id="Quantity"
//               value={Quantity}
//               onChange={handleChange}
//               min={0}
//               max={10}
//             /> */}
//               <div>
//                 <button
//                   onClick={() => handleDeleteFromCart(cart)}
//                   className="BTN"
//                 >
//                   Delete From Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="Summary">
//           <span className="OverallTotal">Total : {OverallTotal}</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cart;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./cart.css";
import image from "./09/undraw_bug_fixing_oc-7-a.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBicycle,
  faBiking,
  faCommentDollar,
  faLaptop,
  faPencil,
  faTrash,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [quantities, setQuantities] = useState(1);
  const [total, setTotal] = useState();

  useEffect(() => {
    const fetchCartData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get("http://localhost:5000/Cart", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        });
        console.log("cart", response);

        setCartItems(response.data.cart_items);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCartData();
  }, []);

  const handleDeleteFromCart = (productId) => {
    axios
      .delete("http://localhost:5000/api/cart/delete", {
        params: { product_id: productId },
      })
      .then((response) => {
        console.log("Product deleted from cart");
        alert("Product Deleted from Cart");
        console.log("response", response.data); // Display the server response message
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // const handleChange = (event, productId) => {
  //   setQuantities({
  //     ...quantities,
  //     [productId]: Number(event.target.value),
  //   });
  // };

  const updateQuantity = (event, productId) => {
    setQuantities(Number(event.target.value));
    console.log(quantities);
  };

  return (
    <div>
      <div className="cartBody">
        <div className="cartHalf">
          {isLoading && (
            <div class="loader">
              <span class="loader-text">Loading....</span>
              <span class="load"></span>
            </div>
          )}
          {error && (
            <p className="errPage">
              <img src={image} alt="" srcset="" className="errImg" />
              Error fetching cart data: {error.message}
            </p>
          )}
          {cartItems.length > 0 && (
            <ul>
              {cartItems.map((item) => (
                <li key={item.product_ID} className="cartLists">
                  <div className="productImage">
                    <img
                      src={`http://localhost:5000${item.product_Img}`}
                      alt=""
                      className="cartImage"
                    />
                  </div>{" "}
                  <div className="cartPName">
                    {" "}
                    {item.product_Name}
                    <div className="cartPPrice">${item.product_Price}</div>
                  </div>
                  <div className="CartproductQty">
                    <div>
                      {" "}
                      <input
                        type="number"
                        name="Quantity"
                        min={0}
                        max={10}
                        className="qty"
                        onClick={updateQuantity}
                        value={item.product_Quantity}
                      />
                    </div>

                    <div>
                      {" "}
                      <FontAwesomeIcon icon={faPencil} className="QtyIcon" />
                    </div>
                  </div>
                  <div className="cartPriceTotal">
                    ${item.product_Price * item.product_Quantity}
                  </div>
                  <div
                    className="cartDel"
                    onClick={() => handleDeleteFromCart(item.product_ID)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </div>
                </li>
              ))}
            </ul>
          )}
          {cartItems.length === 0 && <p></p>}
        </div>
        <div className="cartSummary">
          <div className="summaryContent">
            <h2>Summary </h2>

            <div className="summaryQuestions">
              <div className="subTotal">
                <span className="span1">SubTotal</span>{" "}
                <span className="span2">$0</span>
              </div>
              <div className="subTotal">
                <span className="span1"> Shipping Fee</span>{" "}
                <span className="span2">$0</span>
              </div>
              <div className="subTotal">
                <span className="span1"> Shipping Fee</span>{" "}
                <span className="span2">$0</span>
              </div>
            </div>

            <div className="SumTotal">
              <span className="Totalspan1">Total</span>
              <input
                type="text"
                name=""
                id=""
                value="$0"
                disabled
                className="Totalspan2"
              />
            </div>

            <div className="summaryBtns">
              <button className="checkOut">
                <FontAwesomeIcon icon={faLaptop} />
                Check Out
              </button>
              <button className="payDelivery">
                <FontAwesomeIcon icon={faBiking} />
                Pay on Delivery
              </button>
            </div>

            <div className="summaryNote">
              <h3>Note:</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos labore ex laboriosam cupiditate nobis facere.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Cart;
