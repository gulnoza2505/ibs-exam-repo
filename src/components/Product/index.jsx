import React, { useEffect, useState } from "react";
import Carts from "../../assets/image/shopping-cart-2.png";
import Cross from "../../assets/image/plus.png";

import Plus from "../../assets/image/plus.png";
import { ProductWrapper, TDDD, Loading } from "./style";
import { getProductAction } from "../../redux/modules/GetProduct/getProdcuct.Action";
import { useDispatch, useSelector } from "react-redux";
import Massage from "../Update Cart";
import { addToCart } from "../../redux/modules/cart/Cart.Action";

import Loader from "../Loader/loader";

function Productt() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const product = useSelector((state) => state.getProduct);
  const { loading, success, error } = product;

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  useEffect(() => {
    dispatch(getProductAction());
  }, []);

  return (
    <>
      <ProductWrapper>
        <div className="product">
          <h3 className="text">Products</h3>
        </div>
        <div className="products">
          <div className="all">
            <div className="alll">
              <p>All Produc</p>
            </div>
          </div>
          <div className="shoping">
            <div className="shopping-cart">
              <a>
                <img src={Plus} onClick={toggleModal} />
              </a>
            </div>
            {modal && (
              <div className="modal">
                <div className="overlay" onClick={toggleModal}></div>
                <div className="modal-content">
                  <Massage />
                  <button className="close-modal" onClick={toggleModal}>
                    <img src={Cross} alt="" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="product">
          <Loading>
          {product.loading && <Loader />}
          {product.error && <Loader />}
          </Loading>
          

          <table>
            <tr>
              <th style={{width:'30%'}}>#</th>
              <th style={{width:'30%'}}>Product ID</th>
              <th style={{width:'30%'}}>Photo</th>
              <th style={{width:'30%'}}>Product Name</th>
              <th style={{width:'30%'}} >Address</th>
              <th style={{width:'30%'}}>Data</th>
              <th style={{width:'30%'}}>Price</th>
              <th style={{width:'30%'}}>Buy</th>
            </tr>

            {product.data
              .filter((v) => !cart.some((value) => value.id === v.id))
              .map(
                (
                  { id, productName, price, imageId, description, category },
                  index
                ) => (
                  <tr key={id}>
                    <td>{index + 1}</td>
                    <td>{id}</td>
                    <TDDD>
                      {" "}
                      <img  style={{width:'100%'}}
                        src={`https://store-management-backend-app.herokuapp.com/api/v1/attachment/${imageId}`}
                      />
                    </TDDD>
                    <TDDD  style={{width:'30%'}}>
                      <p>{productName}</p>
                    </TDDD>
                    <TDDD style={{width:'30%'}}D >{description}</TDDD>
                    <TDDD  style={{width:'30%'}}>{category}</TDDD>
                    <TDDD  style={{width:'30%'}}>${price}</TDDD>
                    <td>
                      <img
                        src={Carts}
                        className="add"
                        onClick={() =>
                          dispatch(
                            addToCart({
                              id,
                              imageId,
                              productName,
                              chosen: 1,
                              price,
                            })
                          )
                        }
                      />
                    </td>
                  </tr>
                )
              )}
          </table>
          <div></div>
        </div>
      </ProductWrapper>
    </>
  );
}

export default Productt;
