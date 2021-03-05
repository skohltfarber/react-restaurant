import React from "react";

export default function HeaderNav() {

    return (
        <>
            <ul className="menu">
                <li className="menu"><a href="index.html">Home</a></li>
                <li className="menu"><a href="#beverage">Beverages</a></li>
                <li className="menu"><a href="#appetizer">Appetizers</a></li>
                <li className="menu"><a href="#burger">Burgers</a></li>
                <li className="menu"><a href="product.html">Product</a></li>
                <li className="menu"><a href="shopping_cart.html">Shopping Cart</a></li>
                <li className="menu"><a href="contact.html">Contact Us</a></li>
            </ul>
        </>
    );

}