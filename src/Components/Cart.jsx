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

//   const handleDeleteFromCart = (cart) => {
//     axios
//       .delete("http://localhost:5000/api/cart/delete", {
//         params: { product_id: cart.product_ID },
//       })
//       .then((response) => {
//         // Update UI with success message
//         console.log("Product deleted from cart");
//         console.log(response.data.message); // Display the server response message
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

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

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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
        console.log(response);

        setCartItems(response.data.cart_items);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCartData();
  }, []);

  return (
    <div className="cartBody">
      {isLoading && <p>Loading cart items...</p>}
      {error && <p>Error fetching cart data: {error.message}</p>}
      {cartItems.length > 0 && (
        <ul>
          {cartItems.map((item) => (
            <li key={item.product_ID}>
              {item.product_Name} - ${item.product_Price}
            </li>
          ))}
        </ul>
      )}
      {cartItems.length === 0 && <p>Your cart is empty.</p>}
    </div>
  );
}

export default Cart;
