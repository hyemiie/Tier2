import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Cart1.css";
import image from "./09/undraw_bug_fixing_oc-7-a.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faLaptop } from "@fortawesome/free-solid-svg-icons";
import CustomAlert from "./CustomAlert";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [total, setTotal] = useState(0);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    fetchCartData();
  }, []);

  useEffect(() => {
    calculateTotal();
  }, [cartItems]);

  const showAlert = (message) => {
    setAlertMessage(message);
    setAlertVisible(true);
  };

  const handleAlertClose = () => {
    setAlertVisible(false);
    setAlertMessage('');
  };

  const fetchCartData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get("https://tierfrontend2.onrender.com/Cart", {
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

  const handleDeleteFromCart = async (productId) => {
    if (
      window.confirm(
        "Are you sure you want to remove this item from your cart?"
      )
    ) {
      try {
        await axios.delete("https://tierfrontend2.onrender.com/api/cart/delete", {
          params: { product_id: productId },
        });
        setCartItems(cartItems.filter((item) => item.product_ID !== productId));
        showAlert("Product Deleted from Cart");
      } catch (error) {
        console.error(error);
        showAlert("Failed to delete product from cart");
      }
    }
  };

  const updateQuantity = async (productId, newQuantity) => {
    if (newQuantity < 1) return;

    try {
      await axios.put(
        "https://tierfrontend2.onrender.com/api/cart/update",
        {
          product_id: productId,
          quantity: newQuantity,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      showAlert("Quantity updated succesfully");


      setCartItems(
        cartItems.map((item) =>
          item.product_ID === productId
            ? { ...item, product_Quantity: newQuantity }
            : item
        )
      );
    } catch (error) {
      console.error(error);
      showAlert("Failed to update quantity");
    }
  };

  const calculateTotal = () => {
    const newTotal = cartItems.reduce(
      (acc, item) => acc + item.product_Price * item.product_Quantity,
      0
    );
    setTotal(newTotal);
  };

  if (isLoading) {
    return (
      <div className="loader">
        <span className="loader-text">Loading....</span>
        <span className="load"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
      <p className="errPage">
        <img src={image} alt="" className="errImg" />
        Oops...we don't have access to your records right now,
        <a href="/login">  Please Log in</a>
      </p>
      </div>
    );
  }

  const handleCheckOut = async (productId) => {
 
      try {
        await axios.post("https://tierfrontend2.onrender.com/checkoutSession", {
          params: { product_id: productId },
        });
        // setCartItems(cartItems.filter((item) => item.product_ID !== productId));
        showAlert("Initiating Cart session");
      } catch (error) {
        console.error(error);
        showAlert("Failed to delete product from cart");
      }
    }
  
    

  return (
    <div className="allCart">
     {alertVisible && (
        <CustomAlert message={alertMessage} onClose={handleAlertClose} />
      )}
      <div className="cartHalf">
        <div className="cartBody">
          {cartItems.length > 0 ? (
            <div className="cartDiv">
              <ul className="cartUL">
                <div className="listHeading">
                  <h2>Cart</h2>
                  <p>Purchase one of the sale products and receive free Shipping. Automatically applied during checkout</p>
                </div>
                {cartItems.map((item) => (
                  <li key={item.product_ID} className="cartLists">
                    <div className="CartproductImage">
                      <img
                        src={`https://tierfrontend2.onrender.com${item.product_Img}`}
                        alt=""
                        className="cartImage"
                      />
                      <div className="cartPName">
                        <div className="productName">{item.product_Name}</div>
                        <div className="cartPPrice">${item.product_Price}</div>
                      </div>
                    </div>
                    <div className="cartPriceTotal">
                      ${(item.product_Price * item.product_Quantity).toFixed(2)}
                    </div>
                    <div className="CartproductQty">
                      <input
                        type="number"
                        name="Quantity"
                        min={1}
                        max={10}
                        className="qty"
                        value={item.product_Quantity}
                        onChange={(e) =>
                          updateQuantity(
                            item.product_ID,
                            parseInt(e.target.value)
                          )
                        }
                      />
                    </div>
                    <div className="cartDel">
                      <FontAwesomeIcon
                        icon={faTrash}
                        onClick={() => handleDeleteFromCart(item.product_ID)}
                      />
                    </div>
                  </li>
                ))}
              </ul>
              <div className="total">
                <div className="totalDiv">
                  <h2 className="subTotal">SubTotal</h2>
                  <h2 className="subTotalPrice">${total.toFixed(2)}</h2>
                </div>
                <button className="checkOut">
                  <FontAwesomeIcon icon={faLaptop} />
                  <a href="/error">                  Check Out
</a>
                </button>
              </div>
            </div>
          ) : (
            <p>Your cart is empty</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;