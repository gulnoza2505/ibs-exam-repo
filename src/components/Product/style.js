import styled from "styled-components";

export const ProductWrapper = styled.div`
width: 100%;
height: fit-content;
background-color:white;
margin-left:225px;
padding:10px;
background-color:white ;
box-shadow:10px black;
.product{
    width: 100%;
        padding:5px;
        margin-left:20px;
        /* background-color: #45A5FF; */
        .text{

        color:black;
        font-weight: bold;
        font-size: 26px;
        font-family: 'Roboto',sans-serif;
        /* background-color: #45A5FF; */
        }
    }
    .products{
        width: 100px;
        height:50px;

        margin-left:10px;
        display: flex;
        justify-content: space-between;
        .all{
        width:400px;
        height:50px;
        padding:10px;
        display: flex;
        justify-content: space-between;
            .alll{
            width:110px;
            height: 20px;
            p{
                font-weight: bold;
                color:#45A5FF;
                cursor:pointer;
                span{
                    color:#45A5FF;
                font-weight: bold;
                font-family: 'Poppins',sans-serif;
                    border-bottom: 1px solid #45A5FF;
                }
            }
           
        }
       }
        .shoping{
            .shopping-cart{
                width:43px;
                height: 43px;
                padding: 10px;
                margin-top:-10px;
                margin-left:-10px;
                position: absolute;
                border-radius: 8px;
                background-color: white;
                box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
                a{
                    img{
                    width:25px;
                    cursor:pointer;
                }
            }
            }
            .shopping-cart{
                width:50px;
                height: 46px;
                margin-top:-45px;
                margin-left:490px;
                padding: 10px;
                border-radius: 8px;
                background-color: white;
                box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
                a{
                    img{
                    width:30px;
                    cursor:pointer;
                }
            }
    }
            .active-modal{
                overflow-y:hidden;
            }
            .modal, .overlay {
                width: 100vw;
                height: 100vh;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                position: fixed;
            }

            .overlay {
                background: rgba(49,49,49,0.8);
            }
            .modal-content {
                position: absolute;
                top: 45%;
                left: 50%;
                transform: translate(-50%, -50%);
                line-height: 1.4;
                background: white;
                padding: 14px 28px;
                border-radius: 3px;
                margin:32px 10px;
                width: 700px;
                height: 600px;
            }

            .close-modal {
                position: absolute;
                top: 10px;
                right: 10px;
                padding: 5px 8px;
                border:none;
                cursor: pointer;
                img{
                    width:20px;
                    height:20px;
                }
            }
        }
  
    }

    .product{
        width:100%;
        /* height:500vh; */
        padding:10px;
        table{
            width:90%;
            padding:10px;
             /* background-color: lightgrey; */
            /* box-shadow:10px black; */
            /* box-shadow: 5px 10px; */
            box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;

           tr,th,td{
            border: 1px solid black;
                padding:7px;
                /* color:black; */
                font-weight:500;
                text-align:center;
                font-family: 'Poppins',sans-serif;
                border-collapse: collapse;
                /* margin-bottom:-5px; */
                img{
                width:30px;
                height: 30px;
            }
            }

            .add{
                img{
                    width:30px;
                    height: 30px;
                }
               
                margin-top: 5px;
                margin-left: 10px;
            }
        }
    }

    .top{
        width: 100%;
        padding: 10px;
        display:flex;

    .btn-left{
        width:150px;
        height:40px;
        display:flex;
        justify-content:space-evenly;
        button{
            padding:10px;
            border:none;
            color:black;
            /* background-color:white; */
            border-radius:10px;
            box-shadow: rgba(0, 0, 0, 0.30) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
        }
    }
    
}
`;
export const TDDD = styled.td` 
width: 140px; 
p{ 
  width: 100px; 
  color: black; 
} 
`
export const Loading = styled.div` 
width: auto;
margin-left: 350px;
`