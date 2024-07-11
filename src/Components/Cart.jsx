

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
          Oops...we dont have access to your records, Please Log in
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
    </div>
  );
}
export default Cart;
