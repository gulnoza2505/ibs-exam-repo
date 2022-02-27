import React, { useEffect,  } from "react";
import Cart from "../../assets/image/shopping-cart-2.png";
import { useDispatch, useSelector } from "react-redux";
import { getHistoryAction } from "../../redux/modules/history/HistoryAction";
import { Card1,Historyt } from "./style";
import { Loading } from "../Product/style";
import Loader from "../Loader/loader";


function History() {
  const dispatch = useDispatch();
  const productL = useSelector((state) => state.productList);
  const { loading, success, error } = productL;


  useEffect(() => {
    dispatch(getHistoryAction());
  }, []);
  return (
    <Historyt>
      <Loading>
          {productL.loading && <Loader />}
          {productL.error && <Loader />}
          </Loading>
      
     
      {productL?.data?.map(({ id, productList },index) => (
        <Card1 key={id}>
         <div className="top">
         <p>{index +1}</p>
          <img src={Cart} />
         </div>
          <table>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Amount</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
            
            {productList.map(
              ({ amount, product: { productName, price } },index) => (
                <>
                  <tr>
                    <td>{index +1}</td>
                    <td>{productName}</td>
                    <td>{amount}</td>
                    <td>${price}</td>
                    <td>${amount*price}</td>
                  </tr>
                </>
                
                
              )
            )}
          </table>
                 </Card1>
      ))}
    </Historyt>
  );
}

export default History;
