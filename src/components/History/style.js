import styled from "styled-components";

export const Historyt = styled.div`
 width:100%;
 padding:20px;
 margin-left:225px;
 background-color:white;
 height:fit-content;
 display:flex;
 justify-content:space-between;
 flex-wrap:wrap;
`;

export const Card1 = styled.div`
  width:32.2%;
  height:300px;
  padding:9px;
  border:1px solid red;
  margin-bottom:20px;
  border-radius:6px;
  overflow: hidden;

  .top{
    display: flex;
    width:32%;
    height:fit-content;
    justify-content: space-between;
    img{
    width:70px;
    height: 70px;
    margin-left:100px;
  }
  }
  table{
    width:100%;
    
    th{
      color:red;
      font-weight:500;
      text-align:left;
      border-bottom:1px solid black;
      font-family: 'Poppins',sans-serif;
    }
  }
  .purchase{
    color:black;
    font-weight:bold;
    font-size:18px;
    font-family:'Poppins',sans-serif;
  }
`;
