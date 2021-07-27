import styled from "styled-components";



export const Card = styled("div")`
  background-color: #fffdd0;
  width: 30%;
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  text{
    margin-top: 3%;
  }

  p{
    margin-top: 5%
  }

 
`;

export const Pho = styled.img`
  width: 70%;
  height:70%;
  border-radius: 50%;
`;

export const Row = styled("div")`
  display:flex;
  justify-content: space-evenly;
  margin-bottom: 5%;

 
`;