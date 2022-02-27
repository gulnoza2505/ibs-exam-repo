import styled from "styled-components";

export const Wrapper = styled.div`
width: 100%;
height: fit-content;
margin-left:225px;
background-color: white;
box-shadow: 5px solid black;
.wrapper{
        width:100%;
        height:200px;
        margin-left:20px;
        display:flex;
        justify-content: space-between;
        padding:10px;
        
        .mini-card{
            width:23%;
            height:140px;
            padding:20px;
            line-height: 23px;
            border-radius: 10px;
            background-color:#fff;
            margin-left: 5px;
            
            .card-image{
                display: flex;
                justify-content: space-between;
                .img1{
                    /* background-color: #EEF7FF; */
                    border-radius:100%;
                    padding: 10px;
                    margin-top: -8px;
                    img{
                        width:30px;
                        margin-top: 4px;
                       
                    }
                   
                }
                
            }
            .card1{
                font-size: 18px;
                font-family: sans-serif;
                color:black;
                margin-top: 14px;
                font-weight: bold;
                
            }
            .today{
                display: flex;
                justify-content: space-between;

                /* .bb{
                    display: flex;
                    justify-content: space-between;
                    
                    .title-card{
                        font-size: 14px;
                    }
                } */
            }
        }
    }
    .middle{
        margin-left: 20px;
        width:100%;
        display: flex;
        height: 280px;
        justify-content: space-between;
        .apexcharts1{
            padding:10px;
            margin-top:-25px;
            border-radius:15px;
            margin-left: 15px;
            width:70%;
            background-color: white;
            height:330px;
            .title-chart{
                p{
                    /* color:grey; */
                    font-size:17px;
                    font-weight:600;
                    font-family:'Poppins',sans-serif;
                }
                display: flex;
                width:100%;
                justify-content: space-between;
                select{
                    /* color:grey; */
                    padding:5px;
                    border-radius:90px;
                    border:1px solid grey;
                    option{
                        color:grey;
                    }
                }
            }
        }
        .apexcharts1{
            /* height: calc(100%-30px) */
        }
        .apexcharts2{
            padding:10px;
            margin-top:-25px;
            background-color: white;
            border-radius:10px;
            margin-right:50px;
            margin-left: 50px;
            width:70%;
            height:330px;
            .title-chart{
                p{
                    color:grey;
                    font-size:17px;
                    font-weight:600;
                    font-family:sans-serif;
                }
                display: flex;
                width:100%;
                justify-content: space-between;
                select{
                    color:grey;
                    padding:5px;
                    border-radius:10px;
                    border:1px solid grey;
                    option{
                        color:grey;
                        border:1px solid grey;
                        border-radius: 10px;
                    }
                }
            }
        }
    }
    .bottom{
        width:100%;
        height:fit-content;
        padding:20px;
        display: flex;
        justify-content: space-between;
        .table{
            width:670px;
            height:310px;
            padding:10px;
            border-radius:10px;
            background-color: white;
            margin-top: 33px;
            p{
                color:black;
                font-weight: bold;
                font-size: 19px;
                margin-left:25px;
                margin-top:10px;
                font-family: sans-serif;
            }
           table{
               width:100%;
           }
            td img{
                width:30px;
                height: 30px;
                
            }
           .bg{
               color:yellow;
               background-color: #FFF8ED;
               border-radius:10px;
  
               padding: 8px;
           }
           .pasding{
               color:green;
               border-radius: 10px;
               padding: 8px;
               background-color: #ECFBF2;
           }
           .canseled{
               color:red;
               border-radius: 10px;
               padding: 6px;
               background-color: #FFEFEB;
           }
            tr,th,td{
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom:-5px;
                padding:10px;
                border:none;
                font-size:15px;
            }
        }
        .table-footer{
            width: 2px;
            /* height: 10px; */
            margin: auto;
            a{
           margin-top: 20px;
           margin-left: 300px;
           text-decoration:none;
           color:black;
           font-size:normal;
           font-family: 'Poppins';
            }
            
          a:hover{
              color:#9DA2A8;
          }
          a:focus{
              color:#9DA2A8;
              
          }
        }
        
        .charts{
            padding:10px;
            margin-top:30px;
            background-color: white;
            border-radius:10px;
            margin-left:680px;
            position: absolute;
            width:355px;
            height:310px;
     
        }
       
    }
`;