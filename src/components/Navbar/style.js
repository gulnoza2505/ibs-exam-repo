import styled from "styled-components";

export const NavbarWrapper = styled.div`
 width: 16.5%;
 height:100vh;
 /* background-color: #fff; */
 position: fixed;
 .navbar-logo{
     padding:13px;
     p{
         color: black;
         font-family: sans-serif;
         font-weight: 600;
         font-size: 25px;
         margin-left: 20px;
     }
 }
 .nav-navbar{
     padding:10px;
     width: 210px;  
     height:90vh;
     box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;

     .nav{
         list-style: none;
         width: 200px;
         margin: 12px -2px;
             .link{
                 display: flex;
                 text-decoration:none;
                 padding: 10px;
                 img{
                     width:24px;
                     margin-left: 5px;
                     filter: invert(70%) sepia(1%) saturate(2094%) hue-rotate(180deg) brightness(100%) contrast(66%);
                 }
              
                 p{
                    color: black;
                    margin-left: 14px;
                    margin-top: 4px;
                    font-weight: bold;
                    font-family: 'Poppins',sans-serif;
                 }
         
             }
     
         
     
     }
 }
`;

export const LiBox = styled.li`
   margin-bottom:20px;
   background-color: ${({ active }) => active ? "#EEF7FF" : "transparent"};
`;