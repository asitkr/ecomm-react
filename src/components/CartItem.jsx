import React from 'react';
// import FormatPrice from "../Helpers/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from '../context/CartContext';
import FormatPrice from '../helper/FormatPrice';

const CartItem = ({ id, name, image, color, price, amount }) => {
    
    const { removeItem } = useCartContext();

    const setDecrease = () => {}

    const setIncrease = () => {}

    return (
        <div className="cart_heading grid grid-five-column">
            <div className="cart-image--name">
                <div>
                    <figure>
                        <img src={image} alt={id} />
                    </figure>
                </div>
                <div>
                    <p>{name}</p>
                    <div className="color-div">
                        <p>color:</p>
                        <div
                            className="color-style"
                            style={{ backgroundColor: color, color: color }}></div>
                    </div>
                </div>
            </div>

            <div className="cart-hide">
                <p>
                    <FormatPrice price={price} />
                </p>
            </div>

            <CartAmountToggle
                amount={amount}
                setDecrease={setDecrease}
                setIncrease={setIncrease}
            />

            <div className="cart-hide">
                <p>
                    <FormatPrice price={price * amount} />
                </p>
            </div>

            <div>
                <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
            </div>
        </div>
    )
}

export default CartItem;