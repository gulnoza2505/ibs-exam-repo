import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  dicrimebny,
  decrement,
  increment,
  removeFromCart,
} from "../../redux/modules/cart/Cart.Action";
import { Link } from "react-router-dom";
import { Button, CartWrapper, Clean, Table, Wrapper } from "./style";
function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const sellProducts = () => {
    const sellData = cart?.map(({id,chosen})=>(
      {
        amount:chosen,
        productId:id
      }
    ))
    console.log(sellData);

    axios
    .post('https://store-management-backend-app.herokuapp.com/api/v1/sale/sold',sellData)
    .then((res)=>{
      console.log('success',res.data);
    })
    .catch((err)=>{
      console.log(err);
    })

  };
  return (
    <>
      <Wrapper>
        <div className="table">
          <Table>
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>Price</th>
              <th>Amount</th>
              <th>Delete</th>
            </tr>
            {cart.map(
              ({ id, productName, price, amount, imageId, chosen }, index) => (
                <tr key={id}>
                  <td>
                    <img
                      src={`https://store-management-backend-app.herokuapp.com/api/v1/attachment/${imageId}`}
                    />
                  </td>
                  <td>{productName}</td>
                  <td>${price}</td>
                  <td>
                    <button
                      className="update"
                      disabled={amount <= chosen}
                      onClick={() => dispatch(increment(index))}
                    >
                      +
                    </button>
                    {chosen}
                    <button
                      className="delete"
                      disabled={amount <= chosen}
                      onClick={() => dispatch(decrement(index))}
                    >
                      -
                    </button>
                  </td>
                  <td>
                    <button
                      className="actiondelete"
                      onClick={() => dispatch(removeFromCart(index))}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              )
            )}
          </Table>
        </div>
        <div className="cart">
          <div className="text">
            <h1>Price</h1>
            <p to="/products" className="out">
              Out
            </p>
          </div>
          <div className="hsp">
            <p>Tax:10%</p>
            <p>Total:{cart.reduce((t, val) => t + val.chosen, 0)}</p>
            <p>
              Sub Total:${cart.reduce((t, val) => t + val.chosen * val.price - 10, 0)}
            </p>
          </div>
          <Clean>
            <div className="btn-left">
              <Button onClick={() => dispatch({ type: "CLEAN" })}>Clean</Button>
              <Button onClick={()=>sellProducts()}>Sell</Button>
            </div>
          </Clean>
        </div>
      </Wrapper>
    </>
  );
}

export default Cart;
