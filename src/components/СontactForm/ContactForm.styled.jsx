import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px 30px;
  padding-bottom: 25px;
  border-radius: 5px;
  margin-bottom: 10px;
  
`;
export const Title = styled.h2`
text-align: center;
font-size: 30px;
font-weight: 700;
 
`;


export const Input = styled.input`
  display: block;
  width: 100%;
  margin-bottom: 10px;
  margin-top: 10px;
  padding: 5px;

  border: 0;
  border-bottom: 2px solid gray;
  outline: 0;
  font-size: 16px;
  color: black;
  padding: 7px 0;
  background: transparent;

`;

export const AddButton = styled.button`
 
    width: fit-content;
    appearance: none;
    background-color: #c0f4f0;
    border-radius: 5px;
    border-style: none;
    /* box-shadow: #bcbfc4 0 -12px 6px inset; */
    box-sizing: border-box;
    color: #241b1b;
    cursor: pointer;
    display: inline-block;
    font-size: 16px;
    font-weight: 700;
    margin: 0;
    // margin-left: 10px;
    outline: none;
    padding: 5px;
    quotes: auto;
    text-align: center;
    text-decoration: none;
    transition: all 0.15s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    transition: all linear 250ms;


  &:after {
    position: absolute;
    content: '';
    width: 0;
    height: 100%;
    top: 0;
    right: 0;
    z-index: -1;
    background-color: #3cc4f5b8;
    border-radius: 5px;
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
      7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    
  }
  &:hover {
    background-color: #3cc4f5b8;
    transform: scale(1.1);
    color: black;
  }

  &:hover:after {
    left: 0;
    width: 100%;
  }
`;