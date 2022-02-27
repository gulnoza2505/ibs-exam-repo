import React, { useState } from "react";
import axios from "axios";
import  UploadImage  from "../../assets/image/upload-file.png";
import { Button, Input, InputWrapper, Label, Pap, Textarea,CardWrapper,Wrapper, UpdateProduct, Inputt} from "./style";
function Massage() {
  const [image, setImage] = useState("");

  const [post, setPost] = useState([]);

  const [, setImageProcess] = useState({
    loading: false,
    success: false,
    error: false,
  });

  const [ setSubmitProcess] = useState({
    loading: false,
    success: false,
    error: false,
  });

  const sendImage = (e) => {
    setImageProcess({
      loading: true,
      success: false,
      error: false,
    });
    e.preventDefault();
    const file = e.target.files[0];

    const form = new FormData();
    form.append("image", file);

   
  };

  const submitproduct = (e) => {
    setSubmitProcess({
      loading: true,
      success: false,
      error: false,
    });
    e.preventDefault();
    const { productName, amount, description, category, price } = e.target;
    const post = {
      productName: productName.value,
      amount: amount.value,
      imageId: image,
      description: description.value,
      category: category.value,
      price: price.value,
    };

    axios
      .post(
        "https://store-management-backend-app.herokuapp.com/api/v1/product",
        post
      )
      .then((res) => {
        console.log("succes", res.data)
        setSubmitProcess({
          loading: false,
          success: true,
          error: false,
        });
        e.target.reset();
      })
      .catch((err) => {
        setSubmitProcess({
          loading: false,
          success: false,
          error: true,
        });
      });
  };

  return (
    <>
    
        <span>Create a new product</span>
      
    <CardWrapper>
      <Wrapper onSubmit={submitproduct}>
      <Inputt>
        <Input type="text" placeholder="Product Name" />
        <Input type="number" name="price" placeholder="Product Price" />  
        <Input type="number" name="amount" placeholder="Product Amount" />  
        <Input type="text" placeholder="Product Name" />
        {/* <Input type="text" placeholder="Product date" /> */}
        {/* <Input type="text" placeholder="Product date" /> */}
       
        </Inputt>
        <Textarea placeholder="Write something awesome" name="description" />
        <Label>
            <img src={UploadImage} className="img" />
          

          <input type="file" onChange={sendImage} />
         <div className="txt">
              <h3>Drop Select Or File</h3>
              <p>Drop Filse here or click brows thorought your machine</p>
         </div>
        </Label>
        <Button>
            Create Product
        </Button>

  
      </Wrapper>
      
    </CardWrapper>
    
    </>
  );
}

export default Massage ;
