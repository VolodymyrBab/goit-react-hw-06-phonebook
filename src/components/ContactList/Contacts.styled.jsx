import styled from '@emotion/styled';

export const Title = styled.h2`
  
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  margin-top: 10px;
  margin-bottom: 10px;

`;

export const ContactsList = styled.ul`
  list-style: none;
  margin: 0;
  margin-bottom: 35px;
  border-radius: 10px;
  padding: 25px;
  background-color: white;
`;

export const ListItem = styled.li`
 
  margin-bottom: 10px;
  padding: 8px 20px 10px 20px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all linear 250ms;

  &:hover {
     cursor: pointer;
    box-shadow: inset 0px 0px 10px -2px rgba(66, 68, 90, 0.6);
  }
`;
export const Item = styled.p`
margin-top: 5px;
    margin-bottom: 5px;
    font-weight: 600;
`;
export const DeleteBtn = styled.button`
 
  height: fit-content;
    appearance: none;
    background-color: #eb827e;
    border-radius: 5px;
    border-style: none;
    box-sizing: border-box;
    color: #221919;
    cursor: pointer;
    display: inline-block;
    font-size: 16px;
    font-weight: 700;
    margin: 0;
    outline: none;
    padding: 6px 10px;
    quotes: auto;
    text-align: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;

  &:after {
    position: absolute;
    content: '';
    width: 0;
    height: 100%;
    top: 0;
    right: 0;
    z-index: -1;
 
  }
  &:hover {
    background-color: #ff2600e6;
    transform: scale(1.1);
    color: black;
  }

  &:hover:after {
    left: 0;
    width: 100%;
  }
`;

export const Message = styled.p`
  font-size: 30px;
  font-weight: 400;
`;